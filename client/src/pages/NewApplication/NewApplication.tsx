import React from 'react'
import { Button, Upload, Icon, Form } from 'antd'
import { UploadChangeParam } from 'antd/lib/upload/interface'
import { FormComponentProps } from 'antd/lib/form'
import styled from 'styled-components'

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
import countries from '../../data/countries'

const FormItem = Form.Item

interface State {
  photoURL: string
}

class NewApplication extends React.Component<FormComponentProps, State> {
  state = {
    photoURL: '',
  }

  updateValue = (data: Partial<State>) => {
    this.setState(data as State)
  }

  saveApplication = () => {
    //
  }

  previewImage = (info: UploadChangeParam) => {
    const reader = new FileReader()
    reader.onloadend = obj => {
      // tslint:disable-next-line:no-string-literal
      this.setState({ photoURL: obj.srcElement!['result'] })
    }
    reader.readAsDataURL(info.file.originFileObj!)
  }

  submitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault()

    this.props.form.validateFields((err: string, value: any) => {
      //
    })
  }

  render() {
    const { photoURL } = this.state
    const { getFieldDecorator } = this.props.form

    return (
      <Form onSubmit={this.submitHandler}>
        <Page
          renderHeader={
            <div className="block justify-between items-center sm:flex">
              <Breadcrumbs entries={['Applications', 'New']} />

              <div className="mt-4 sm:mt-0">
                <Button
                  type="primary"
                  htmlType="submit"
                  onClick={this.saveApplication}
                >
                  <Icon
                    component={() => (
                      <i className="ion-md-checkbox" style={{ fontSize: 20 }} />
                    )}
                  />
                  Save Application
                </Button>
              </div>
            </div>
          }
        >
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
                          {getFieldDecorator('lastName', {
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
              </Panel>

              <Panel title="Band">
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
              </Panel>
            </div>
          </div>
        </Page>
      </Form>
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

export default Form.create()(NewApplication)
