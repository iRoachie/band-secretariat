import React from 'react'

interface Props {
  entries: string[]
}

const Breadcrumbs: React.SFC<Props> = ({ entries }) => (
  <h1>
    {entries.map(
      (a, index) =>
        index < entries.length - 1 ? (
          <span key={a} className="text-primary-2">
            {a} /{' '}
          </span>
        ) : (
          a
        )
    )}
  </h1>
)

export default Breadcrumbs
