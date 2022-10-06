import { getProviders, signIn as SignInProvider } from "next-auth/react";
import Header from "../../components/Header"

function signIn({providers}) {
    return (
        <>
            <Header />
            <div className="flex flex-col items-center justify-center py-2 px-14 text-center dark:bg-gray-900">
                <img className="w-80 dark:invert" src="https://links.papareact.com/ocw" alt="" />
                <p className="font-xs italic dark:text-gray-200">
                    This is not a REAL app, it is built for educational purposes only
                </p>
                <div className="mt-[5rem]">
                    {Object.values(providers).map((provider) => (
                        <div key={provider.name}>
                            <button className='p-3 bg-blue-500 rounded-lg text-gray-200' onClick={() => SignInProvider(provider.id, {callbackUrl: '/'})}>
                                Sign in with {provider.name}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export async function getServerSideProps() {
    const providers = await getProviders()

    return {
        props: {
            providers
        }
    }
}

export default signIn