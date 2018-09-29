import React from 'react'
import { DatePicker, Upload, Icon } from 'antd'
import { UploadChangeParam } from 'antd/lib/upload/interface'
import styled from 'styled-components'

import {
  Page,
  Button,
  Breadcrumbs,
  Panel,
  Input,
  Select,
} from '../../components'
import countries from '../../data/countries'
import { Value } from '../../types'

import { Moment } from 'moment'

interface State {
  applicationDate: Moment | undefined
  firstName: string
  lastName: string
  otherNames: string
  nationality: string
  country: Value
  photoURL: string
  email: string
  tel: string
  cell: string
  address: string
}

class NewApplication extends React.Component<{}, State> {
  state = {
    applicationDate: undefined,
    firstName: '',
    lastName: '',
    otherNames: '',
    nationality: '',
    country: '',
    photoURL: '',
    email: '',
    tel: '',
    cell: '',
    address: '',
  }

  updateValue = (data: Partial<State>) => {
    this.setState(data as State)
  }

  saveApplication = () => {
    //
  }

  triggerUpload = () => {
    const input = document.getElementById('file-picker')
    input!.click()
  }

  previewImage = (info: UploadChangeParam) => {
    const reader = new FileReader()
    reader.onloadend = obj => {
      // tslint:disable-next-line:no-string-literal
      this.setState({ photoURL: obj.srcElement!['result'] })
    }
    reader.readAsDataURL(info.file.originFileObj!)
  }

  render() {
    const { photoURL } = this.state

    return (
      <Page
        renderHeader={
          <div className="block justify-between items-center sm:flex">
            <Breadcrumbs entries={['Applications', 'New']} />

            <div className="mt-4 sm:mt-0">
              <Button
                appearance="primary"
                iconBefore="ion-md-checkbox"
                onClick={this.saveApplication}
              >
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
                      <Icon type="plus" />
                      <div className="ant-upload-text">Upload</div>
                    </div>
                  )}
                </FilePicker>

                <div className="flex-1 sm:pl-4 mt-4 sm:mt-0">
                  <div className="row">
                    <div className="col-md-6">
                      <Input
                        label="First Name"
                        required
                        value={this.state.firstName}
                        onChangeText={firstName =>
                          this.updateValue({ firstName })
                        }
                      />
                    </div>
                    <div className="col-md-6">
                      <Input
                        label="Last Name"
                        required
                        value={this.state.lastName}
                        onChangeText={lastName =>
                          this.updateValue({ lastName })
                        }
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <Input
                        label="Other names"
                        value={this.state.otherNames}
                        onChangeText={otherNames =>
                          this.updateValue({ otherNames })
                        }
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <Select
                        label="Country"
                        options={countries.map(a => ({
                          label: a.name,
                          value: a.code,
                        }))}
                        value={this.state.country}
                        onChange={country => this.updateValue({ country })}
                      />
                    </div>

                    <div className="col-md-6">
                      <Input
                        label="Nationality"
                        value={this.state.nationality}
                        onChangeText={nationality =>
                          this.updateValue({ nationality })
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Panel>
          </div>
          <div className="col-md-4">
            <Panel title="Contact">
              <Input
                label="Telephone"
                type="tel"
                required
                value={this.state.tel}
                onChangeText={tel => this.updateValue({ tel })}
              />
              <Input
                label="Cell"
                type="tel"
                value={this.state.cell}
                onChangeText={cell => this.updateValue({ cell })}
              />
              <Input
                label="Email"
                type="email"
                value={this.state.email}
                onChangeText={email => this.updateValue({ email })}
              />
              <Input
                label="Address"
                textarea
                value={this.state.address}
                rows={5}
                onChangeText={address => this.updateValue({ address })}
              />
            </Panel>

            <Panel title="Band">
              <DatePicker
                style={{ width: '100%' }}
                placeholder="Application Date"
                size="large"
                value={this.state.applicationDate}
                onChange={applicationDate =>
                  this.updateValue({ applicationDate })
                }
              />
            </Panel>
          </div>
        </div>
      </Page>
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

export default NewApplication
