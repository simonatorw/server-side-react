import fetch from 'isomorphic-fetch';

const Page = ({ headers }) => 
    <div>Hello React
    <ul>
    { headers.map((item, i) => (
        <li key={`${item}_${i}`}>{item}</li>
    )) }
    </ul>
    </div>
    
Page.getInitialProps = async () => {
    const response = await fetch('http://127.0.0.1:8124/keymetrics');
    const list = await response.json();

    return { headers: list.headers };
}

export default Page;