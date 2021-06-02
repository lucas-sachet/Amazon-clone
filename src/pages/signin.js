import { getProviders, getSession, signIn } from 'next-auth/client'

export default function SignIn({ providers }) {
  return (
    <>
      {Object.values(providers).map(provider => (
        <div className='w-screen h-screen flex items-center justify-center' key={provider.name}>
         <div className='flex items-center shadow-google rounded-md hover:shadow-google_hover'>
          <img className="google-icon" alt="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
          <button className='flex items-center bg-google-blue w-48 h-12 whitespace-nowrap active:border-google-active_blue focus:outline-none hover:cursor-pointer hover:bg-google-active_blue' onClick={() => signIn(provider.id)}>
            <span className='text-justify text-white pl-6 font-bold text-sm'>
              Sign in with {provider.name}
            </span> 
          </button>
         </div>
        </div>
      ))}
    </>
  )
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context){
  const providers = await getProviders()
  const { req, res} = context;
  const session = await getSession({req});

  if(session && res) {
    res.writeHead(302, {
      Location: "/",
    });
    res.end();
    return;
  }
  return {
    props: { providers }
  }
}

/*
// If older than Next.js 9.3
SignIn.getInitialProps = async () => {
  return {
    providers: await getProviders()
  }
}
*/