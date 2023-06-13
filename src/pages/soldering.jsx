//https://react-icons.github.io/react-icons/icons?name=bs
import { promises as fs } from 'fs'
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export default function Soldering({ fileContents }) {
  return (
    <div>
      <header className="App-standardPage">
        <div className="App-pageHelper">
          <ReactMarkdown className="App-standardPage" rehypePlugins={[rehypeRaw]}>{fileContents}</ReactMarkdown>
        </div>
      </header>
    </div>
  );
}

export async function getStaticProps() {
  const fileContents = await fs.readFile(process.cwd() + '/markdowns/soldering.md', 'utf8')
  return { props: { fileContents } }
}

