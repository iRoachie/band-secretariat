import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { Card } from 'antd'
import styled from 'styled-components'

import { Theme } from '../../config'
import {
  Application,
  ApplicationStatus,
} from '../../../../server/src/generated/prisma'
import CardItem from './components/CardItem'

interface Props {
  application: Application
}

const ApplicationCard: React.SFC<Props> = ({ application }) => (
  <Link to={`/applications/${application.id}`} className="block ">
    <Content
      cover={<Avatar image={application.photoURL!} />}
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

/** Styles */

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

interface StatusProps {
  status: ApplicationStatus
}

const Status = styled.span.attrs({
  className: 'p-1 font-bold text-xs text-right absolute',
})`
  top: 0.5rem;
  left: 0.5rem;
  white-space: nowrap;
  background: ${(props: StatusProps) => {
    return Theme.status[props.status.toLowerCase()]
  }};
  color: ${(props: StatusProps) => {
    if (props.status === 'APPLIED' || props.status === 'ASSIGNED') {
      return 'rgba(0,0,0,.87)'
    }

    return '#fff'
  }};
`

interface AvatarProps {
  image: string
}

const Avatar = styled.div.attrs({
  className: 'h-auto w-64',
})`
  min-height: 15rem;
  background-size: cover;
  background-image: url(${(props: AvatarProps) => props.image});
  background-position: center top;
`

export default ApplicationCard
