//https://react-icons.github.io/react-icons/icons?name=bs
import React from "react";
import { promises as fs } from 'fs'
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import { FaReact } from 'react-icons/fa';

import IconAndName from "@/comps/IconAndName/IconAndName";
import {GiSolderingIron} from 'react-icons/gi'
import {MdOutlineWavingHand} from 'react-icons/md'
import {BsPrinterFill} from 'react-icons/bs'
import {GiReturnArrow} from 'react-icons/gi'

export default function GettingStarted({fileContents}) {
return (
    <div className="App">
      <div style ={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
      <IconAndName icon ={<MdOutlineWavingHand> </MdOutlineWavingHand>} title = "Getting Started: New Members" buttonTitle = "Click here to begin" color = "#f9f9f9"></IconAndName>
      <IconAndName icon ={<GiReturnArrow> </GiReturnArrow>} title = "Returning Members" buttonTitle = "Click here to begin" color = "#f9f9f9"></IconAndName>
      <IconAndName icon ={<GiSolderingIron> </GiSolderingIron>} title = "Solder Training Information" buttonTitle = "Click here to begin" color = "#f9f9f9"></IconAndName>
      <IconAndName icon ={<BsPrinterFill> </BsPrinterFill>} title = "Get Something 3D Printed" buttonTitle = "Click here to begin" color = "#f9f9f9"></IconAndName>
      </div>
      {/* <header className="App-standardPage">
       <div className="App-pageHelper">
        <ReactMarkdown class="App-standardPage" rehypePlugins={[rehypeRaw]}>{fileContents}</ReactMarkdown>
        </div>
      </header> */}
    </div>
  );
}

export async function getStaticProps() {
  const file = 'quickstart.md'
  const fileContents = await fs.readFile( process.cwd() + '/markdowns/' + file, 'utf8')
  return {props: {fileContents}}
}