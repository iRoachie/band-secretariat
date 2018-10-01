import React from 'react'
import {
  Alert,
  Button,
  Upload,
  Icon,
  Form,
  Checkbox,
  Row,
  Col,
  notification,
  message,
} from 'antd'
import { RouteComponentProps } from 'react-router'
import { UploadChangeParam } from 'antd/lib/upload/interface'
import { FormComponentProps } from 'antd/lib/form'
import styled from 'styled-components'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

import {
  Page,
  Breadcrumbs,
  Panel,
  DatePicker,
  Select,
  SelectOption,
  Input,
  InputTextArea,
} from '../../components'
import { LoadingConsumer } from '../../containers/Loading'
import { countries, instruments, classes, ministries } from '../../data'
import { ApplicationCreateInput } from '../../../../server/src/generated/prisma'
import { firebase } from '../../config'

const FormItem = Form.Item
const CheckboxGroup = Checkbox.Group

const CreateApplicationMutation = gql`
  mutation CreateApplicationMutation($application: ApplicationCreateInput!) {
    createApplication(data: $application) {
      id
    }
  }
`

interface State {
  photoURL: string
  hasErrors: boolean
}

type Props = {
  showLoading(): void
  hideLoading(): void
} & RouteComponentProps<{}> &
  FormComponentProps

class NewApplication extends React.Component<Props, State> {
  state = {
    photoURL: '',
    hasErrors: false,
  }

  componentDidMount() {
    this.props.form.setFieldsValue({
      sex: 'M',
      country: 'BB',
    })
  }

  previewImage = (info: UploadChangeParam) => {
    const reader = new FileReader()
    reader.onloadend = obj => {
      // tslint:disable-next-line:no-string-literal
      this.setState({ photoURL: obj.srcElement!['result'] })
    }
    reader.readAsDataURL(info.file.originFileObj!)
  }

  showError = (err: any) => {
    this.props.hideLoading()
    // tslint:disable-next-line:no-console
    console.error(err)
    message.error('Error adding new application')
  }

  submitHandler = (event: React.SyntheticEvent, addApplication: () => any) => {
    event.preventDefault()

    this.setState({ hasErrors: false }, () => {
      this.props.form.validateFields(async (err: string, values: any) => {
        if (err) {
          document.body.scrollTop = document.documentElement.scrollTop = 0
          this.setState({ hasErrors: true })
          return
        }

        const { photoURL } = this.state

        const application: ApplicationCreateInput = {
          firstName: values.firstName,
          surName: values.surName,
          sex: values.sex,
          band: 'Pathfinder',
          dateOfBirth: values.dateOfBirth.format('YYYY-MM-DD'),
          applicationDate: values.applicationDate.format('YYYY-MM-DD'),
          interestedInstruments: {
            set: [
              values.instrument1,
              ...(!!values.instrument2 ? [values.instrument2] : []),
            ],
          },
          reason: values.reason,
          country: countries.find(a => a.code === values.country)!.code,
          ...(!!values.otherNames && { otherNames: values.otherNames }),
          ...(!!values.nationality && { nationality: values.nationality }),
          ...(!!values.occupation && { occupation: values.occupation }),
          ...(!!values.email && { email: values.email }),
          ...(!!values.address && { address: values.address }),
          ...(!!values.grade && { grade: values.grade }),
          ...(!!values.church && { church: values.church }),
          ...(!!values.club && { club: values.club }),
          ...(!!values.pathfinder_adventurerClass && {
            pathfinder_adventurerClass: values.pathfinder_adventurerClass,
          }),
          ...(!!values.churchPosition && {
            churchPosition: values.churchPosition,
          }),
          ...(!!values.bandExperience && {
            bandExperience: values.bandExperience,
          }),
          ...(!!values.parent_guardian && {
            parent_guardian: values.parent_guardian,
          }),
          ...(!!values.employer_school && {
            employer_school: values.employer_school,
          }),
          ...(!!values.hobbies && {
            hobbies: values.hobbies,
          }),
          ...(!!values.ministryAreas && {
            ministryAreas: {
              set: values.ministryAreas,
            },
          }),
          phones: {
            create: [
              {
                label: 'Tel',
                number: values.tel,
              },
              ...(!!values.cell
                ? [
                    {
                      label: 'Cell',
                      number: values.cell,
                    },
                  ]
                : []),
            ],
          },
        }

        this.props.showLoading()

        if (photoURL !== '') {
          try {
            const path = `${application.firstName}-${
              application.surName
            }-${Date.now()}`

            await this.uploadImage(photoURL, path)

            application.photoURL = `/avatars/${path}`
          } catch (error) {
            this.showError(error)
            return
          }
        }

        this.saveApplication(application, addApplication)
      })
    })
  }

  uploadImage = (dataURL: string, path: string) => {
    return firebase
      .storage()
      .ref('/avatars')
      .child(path)
      .putString(dataURL, 'data_url')
  }

  saveApplication = async (
    application: ApplicationCreateInput,
    addApplication: (...args: any[]) => Promise<{ data: any }>
  ) => {
    try {
      const { data } = await addApplication({ variables: { application } })

      notification.success({
        message: 'Application Entered',
        description: `Application for ${application.firstName} ${
          application.surName
        } entered`,
        duration: 2,
        onClose: () => {
          this.props.hideLoading()
          this.props.history.push(`/applications/${data.createApplication.id}`)
        },
      })
    } catch (err) {
      this.showError(err)
    }
  }

  render() {
    const { photoURL, hasErrors } = this.state
    const { getFieldDecorator } = this.props.form

    return (
      <Mutation mutation={CreateApplicationMutation}>
        {createApplication => (
          <Form onSubmit={e => this.submitHandler(e, createApplication)}>
            <Page
              renderHeader={
                <div className="block justify-between items-center sm:flex">
                  <Breadcrumbs entries={['Applications', 'New']} />

                  <div className="mt-4 sm:mt-0">
                    <Button type="primary" htmlType="submit">
                      <Icon
                        component={() => (
                          <i
                            className="ion-md-checkbox"
                            style={{ fontSize: 20 }}
                          />
                        )}
                      />
                      Save Application
                    </Button>
                  </div>
                </div>
              }
            >
              {hasErrors && (
                <ErrorAlert
                  message="Check the form for errors below."
                  type="error"
                />
              )}

              <div className="row">
                <div className="col-md-8">
                  <Panel title="Personal">
                    <div className="row flex flex-col sm:flex-row px-4">
                      <FilePicker
                        name="avatar"
                        listType="picture-card"
                        showUploadList={false}
                        onChange={this.previewImage}
                        customRequest={() => null}
                        style={{ flex: 1 }}
                      >
                        {photoURL ? (
                          <img src={photoURL} alt="avatar" />
                        ) : (
                          <div>
                            <Icon type="camera" />
                            <div className="ant-upload-text">Upload Photo</div>
                          </div>
                        )}
                      </FilePicker>

                      <div className="flex-1 sm:pl-4 mt-4 sm:mt-0">
                        <div className="row">
                          <div className="col-md-6">
                            <FormItem label="First Name" required>
                              {getFieldDecorator('firstName', {
                                rules: [
                                  {
                                    required: true,
                                    message: 'Please enter First Name',
                                  },
                                ],
                              })(<Input />)}
                            </FormItem>
                          </div>
                          <div className="col-md-6">
                            <FormItem label="Last Name" required>
                              {getFieldDecorator('surName', {
                                rules: [
                                  {
                                    required: true,
                                    message: 'Please enter Last Name',
                                  },
                                ],
                              })(<Input />)}
                            </FormItem>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <FormItem label="Other names">
                              {getFieldDecorator('otherNames')(<Input />)}
                            </FormItem>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <FormItem label="Sex">
                          {getFieldDecorator('sex')(
                            <Select
                              showSearch
                              filterOption={(input, option) =>
                                option.props
                                  .children!.toString()
                                  .toLowerCase()
                                  .includes(input.toLowerCase())
                              }
                            >
                              <SelectOption value="M">Male</SelectOption>
                              <SelectOption value="F">Female</SelectOption>
                            </Select>
                          )}
                        </FormItem>
                      </div>

                      <div className="col-md-6">
                        <FormItem label="Date of Birth" required>
                          {getFieldDecorator('dateOfBirth', {
                            rules: [
                              {
                                required: true,
                                message: 'Enter date of birth',
                              },
                            ],
                          })(<DatePicker />)}
                        </FormItem>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <FormItem label="Country">
                          {getFieldDecorator('country')(
                            <Select
                              showSearch
                              filterOption={(input, option) =>
                                option.props
                                  .children!.toString()
                                  .toLowerCase()
                                  .includes(input.toLowerCase())
                              }
                            >
                              {countries.map(a => (
                                <SelectOption key={a.code} value={a.code}>
                                  {a.name}
                                </SelectOption>
                              ))}
                            </Select>
                          )}
                        </FormItem>
                      </div>

                      <div className="col-md-6">
                        <FormItem label="Nationality">
                          {getFieldDecorator('nationality')(<Input />)}
                        </FormItem>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <FormItem label="Occupation">
                          {getFieldDecorator('occupation')(<Input />)}
                        </FormItem>
                      </div>
                      <div className="col-md-6">
                        <FormItem label="School or Employer">
                          {getFieldDecorator('employer_school')(
                            <Input placeholder="Name of School or Business" />
                          )}
                        </FormItem>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        <FormItem label="Hobbies">
                          {getFieldDecorator('hobbies')(<InputTextArea />)}
                        </FormItem>
                      </div>
                    </div>
                  </Panel>
                </div>

                <div className="col-md-4">
                  <Panel title="Contact">
                    <FormItem label="Telephone" required>
                      {getFieldDecorator('tel', {
                        rules: [
                          {
                            required: true,
                            message: 'Please enter contact number',
                          },
                        ],
                      })(<Input />)}
                    </FormItem>

                    <FormItem label="Cell">
                      {getFieldDecorator('cell')(<Input />)}
                    </FormItem>

                    <FormItem label="Email">
                      {getFieldDecorator('email', {
                        rules: [
                          {
                            type: 'email',
                            message: 'Enter a valid email address',
                          },
                        ],
                      })(<Input />)}
                    </FormItem>

                    <FormItem label="Address">
                      {getFieldDecorator('address')(<InputTextArea />)}
                    </FormItem>

                    <FormItem label="Parent/Guardian">
                      {getFieldDecorator('parent_guardian')(<Input />)}
                    </FormItem>
                  </Panel>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <Panel title="Band">
                    <div className="row">
                      <div className="col-md-6">
                        <FormItem label="Application Date" required>
                          {getFieldDecorator('applicationDate', {
                            rules: [
                              {
                                required: true,
                                message: 'Enter application date',
                              },
                            ],
                          })(<DatePicker />)}
                        </FormItem>
                      </div>
                      <div className="col-md-6">
                        <FormItem label="Music Grade">
                          {getFieldDecorator('grade')(
                            <Input placeholder="Grade and examination body" />
                          )}
                        </FormItem>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        <FormItem label="Band Experience">
                          {getFieldDecorator('bandExperience')(
                            <InputTextArea placeholder="Any musical instrumental groups you were apart of" />
                          )}
                        </FormItem>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <FormItem label="Primary Instrument" required>
                          {getFieldDecorator('instrument1', {
                            rules: [
                              {
                                required: true,
                                message:
                                  'Select instrument interested in playing',
                              },
                            ],
                          })(
                            <Select
                              showSearch
                              filterOption={(input, option) =>
                                option.props
                                  .children!.toString()
                                  .toLowerCase()
                                  .includes(input.toLowerCase())
                              }
                            >
                              {instruments.map(a => (
                                <SelectOption key={a} value={a}>
                                  {a}
                                </SelectOption>
                              ))}
                            </Select>
                          )}
                        </FormItem>
                      </div>
                      <div className="col-md-6">
                        <FormItem label="Secondary Instrument">
                          {getFieldDecorator('instrument2')(
                            <Select
                              showSearch
                              filterOption={(input, option) =>
                                option.props
                                  .children!.toString()
                                  .toLowerCase()
                                  .includes(input.toLowerCase())
                              }
                            >
                              {instruments.map(a => (
                                <SelectOption key={a} value={a}>
                                  {a}
                                </SelectOption>
                              ))}
                            </Select>
                          )}
                        </FormItem>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        <FormItem label="State breifly your reason for wanting to join the band">
                          {getFieldDecorator('reason', {
                            rules: [
                              {
                                required: true,
                                message: 'Enter reason for wanting to join',
                              },
                            ],
                          })(<InputTextArea />)}
                        </FormItem>
                      </div>
                    </div>
                  </Panel>
                </div>
                <div className="col-md-6">
                  <Panel title="Church">
                    <FormItem label="Church">
                      {getFieldDecorator('church')(
                        <Input placeholder="Name of church" />
                      )}
                    </FormItem>
                    <FormItem label="Position Held">
                      {getFieldDecorator('churchPosition')(
                        <Input placeholder="Deacon, Elder, Sabbath School etc." />
                      )}
                    </FormItem>
                    <FormItem label="Adventurer/Pathfinder Club">
                      {getFieldDecorator('club')(
                        <Input placeholder="Name of club" />
                      )}
                    </FormItem>
                    <FormItem label="Adventurer/Pathfinder Class">
                      {getFieldDecorator('pathfinder_adventurerClass')(
                        <Select
                          showSearch
                          filterOption={(input, option) =>
                            option.props
                              .children!.toString()
                              .toLowerCase()
                              .includes(input.toLowerCase())
                          }
                        >
                          {classes.map(a => (
                            <SelectOption key={a} value={a}>
                              {a}
                            </SelectOption>
                          ))}
                        </Select>
                      )}
                    </FormItem>

                    <FormItem label="Areas of Youth Ministry">
                      {getFieldDecorator('ministryAreas')(
                        <CheckboxGroup>
                          <Row>
                            {ministries.map(a => (
                              <Col md={12} key={a.value}>
                                <Checkbox value={a.value}>{a.label}</Checkbox>
                              </Col>
                            ))}
                          </Row>
                        </CheckboxGroup>
                      )}
                    </FormItem>
                  </Panel>
                </div>
              </div>
            </Page>
          </Form>
        )}
      </Mutation>
    )
  }
}

/* Styles */
const FilePicker = styled(Upload)`
  .ant-upload {
    height: auto !important;
    min-width: 226px;
    min-height: 226px;
    width: 100% !important;

    @media screen and (min-width: 576px) {
      max-width: 226px;
    }
  }
`

const ErrorAlert = styled(Alert)`
  margin-bottom: 1rem !important;
`

export default Form.create()((props: Props) => (
  <LoadingConsumer>
    {({ show, hide }) => (
      <NewApplication {...props} showLoading={show} hideLoading={hide} />
    )}
  </LoadingConsumer>
))
