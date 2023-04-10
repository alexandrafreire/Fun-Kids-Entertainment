import React, { useEffect, useState } from 'react';
import {SiteDetail} from "../../ui-components"
import { useParams } from 'react-router-dom';
import { DataStore } from 'aws-amplify';
import { Sites } from "./../../models";
import "./../../App.css"

function SitesDescription() {
  

  return (
    <div>
      <SiteDetail />
    </div>
  );
}

export default SitesDescription;
