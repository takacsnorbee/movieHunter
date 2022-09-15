import './Error.css';

const Error = ({ errorMsg }) => {
  return (
    <main className='error-comp'>
      <h1>{errorMsg}</h1>
      <button onClick={() => window.location.reload(false)}>
        Try it again
      </button>
    </main>
  );
};

export default Error;
