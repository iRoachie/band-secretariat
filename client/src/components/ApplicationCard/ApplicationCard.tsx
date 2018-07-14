import React from 'react'

import { ApplicationStatus } from '../../../../server/src/generated/prisma'
import { Status, Avatar, CardBody, Name } from './styles'
import CardItem from './components/CardItem'

interface Props {
  status: ApplicationStatus
}

const ApplicationCard: React.SFC<Props> = ({ status }) => (
  <a href="" className="block col-sm-6 col-lg-4">
    <article className="rounded-sm mb-8">
      <div className="flex">
        <Avatar src="https://randomuser.me/api/portraits/women/14.jpg" alt="" />

        <CardBody>
          <header className="flex justify-between items-start mb-4">
            <Name>Aleymayu Debayu</Name>

            <Status status={status}>{status.replace('_', ' ')}</Status>
          </header>

          <CardItem value="24 Jan 2018" icon="ion-md-calendar" />
          <CardItem value="663-123-1223" icon="ion-ios-call" />
          <CardItem value="gergoe@gmail.com" icon="ion-ios-mail" />
        </CardBody>
      </div>
    </article>
  </a>
)

export default ApplicationCard
