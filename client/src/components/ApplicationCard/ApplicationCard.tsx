import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { Card } from 'antd'
import styled from 'styled-components'

import { Application } from '../../../../server/src/generated/prisma'
import { Status, Avatar } from './styles'
import CardItem from './components/CardItem'

interface Props {
  application: Application
}

const ApplicationCard: React.SFC<Props> = ({ application }) => (
  <Link to={`/applications/${application.id}`} className="block ">
    <Content
      cover={<Avatar alt="Applicant Photo" src={application.photoURL} />}
      actions={[
        !!application.phones &&
          !!application.phones[0] && (
            <CardItem
              value={application.phones[0].number}
              icon="ion-ios-call"
            />
          ),

        !!application.email && (
          <CardItem value={application.email} icon="ion-ios-mail" />
        ),
      ]}
    >
      <Card.Meta
        avatar={
          <Status status={application.status}>
            {application.status.replace('_', ' ')}
          </Status>
        }
        title={`${application.firstName} ${application.surName}`}
        description={moment.utc(application.applicationDate).format('Y')}
      />
    </Content>
  </Link>
)

const Content = styled(Card)`
  .ant-card-actions {
    display: flex;
    flex-direction: column;
    padding: 1rem;

    li {
      width: 100% !important;
      text-align: left;
      margin: 0;
    }
  }

  .ant-card-actions > li:not(:last-child) {
    border-right: 0;
    margin-bottom: 1rem;
  }
`

export default ApplicationCard
