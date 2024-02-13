import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { cssBundleHref } from "@remix-run/css-bundle";
import { ClientOnly } from "remix-utils/client-only";
import ReactQuill from "~/components/react-quill.client"
import reactQuillCSS from 'react-quill/dist/quill.snow.css';

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix React Quill Solution!" },
  ];
};

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: reactQuillCSS }
];

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix React-Quill Solution</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://www.rickettstech.com"
            rel="noreferrer"
          >
            Meet the engineers.
          </a>
        </li>
        <ClientOnly fallback={<p>Sorry quill down, quill in distress!!!!!</p>}>
          {() => <ReactQuill />}
        </ClientOnly>  
      </ul>
    </div>
  );
}
