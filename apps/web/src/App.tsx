import Nav from './components/nav';
import DefaultLayout from './components/layouts/default';

function App() {
  return (
    <DefaultLayout header={<Nav />}>
      <h1>Hello, world!</h1>
    </DefaultLayout>
  )
}

export default App
