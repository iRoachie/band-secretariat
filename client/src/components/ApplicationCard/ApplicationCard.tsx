import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

import { Application } from '../../../../server/src/generated/prisma'
import { Status, Avatar, CardBody, Name } from './styles'
import CardItem from './components/CardItem'

interface Props {
  application: Application
}

const ApplicationCard: React.SFC<Props> = ({ application }) => (
  <Link
    to={`/applications/${application.id}`}
    className="block col-sm-6 col-lg-4"
  >
    <article className="rounded-sm mb-8">
      <div className="flex">
        <Avatar src="https://randomuser.me/api/portraits/women/14.jpg" alt="" />

        <CardBody>
          <header className="flex justify-between items-start mb-4">
            <Name>
              {application.firstName} {application.surName}
            </Name>

            <Status status={application.status}>
              {application.status.replace('_', ' ')}
            </Status>
          </header>

          <CardItem
            value={moment.utc(application.applicationDate).format('Y')}
            icon="ion-md-calendar"
          />

          {!!application.phone &&
            !!application.phone[0] && (
              <CardItem
                value={application.phone[0].number}
                icon="ion-ios-call"
              />
            )}

          {!!application.email && (
            <CardItem value={application.email} icon="ion-ios-mail" />
          )}
        </CardBody>
      </div>
    </article>
  </Link>
)

export default ApplicationCard
