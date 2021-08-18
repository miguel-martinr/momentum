import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export type Tab = { text: string, url: string };

export interface HomeHeaderProps {
  title: string,
  tabs: Tab[],
}



export const HomeHeader = (props: HomeHeaderProps) => {
  return (
    <Fragment>

      <div className="row">
        <div className="col-sm-1">
          <h1>{props.title}</h1>
        </div>
      </div>
      <div className="row mt-5">
        {
          props.tabs.map((tab: Tab) => {
            return (
              <div className="col-sm-1 h5">
                <Link to={tab.url}>
                  <span>{tab.text}</span>
                </Link>
              </div>
            )
          })
        }
      </div>

    </Fragment>
  )
}
