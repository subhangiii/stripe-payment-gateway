import { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useRouter } from 'next/router';
import useAuth from '../hooks/useAuth';
import Table from '../component/Table';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
loadStripe(
  'pk_test_51LUeGISHkNF8FoN5s1Pp8JsPE34hkYQWf0zP527Crd2KtSafLpNw6aeJ3bEqRS55rlAabogj2Qy80pu866BWc8f000KPSSpI8o'
);

const HomePage = () => {
  const router = useRouter();
  const { success, canceled } = router.query;
  const { logout, user } = useAuth();

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    // const query = new URLSearchParams(window.location.search);

    if (success !== undefined || canceled !== undefined) {
      if (success) {
        console.log('Order placed! You will receive an email confirmation.');
      }

      if (canceled) {
        console.log(
          'Order canceled -- continue to shop around and checkout when you’re ready.'
        );
      }
    }
  }, [success, canceled]);

  return (
    <div className="">
      <center>
        <h1 className="mb-3 text-3xl font-medium">
          Choose the right plan for you
        </h1>
        <table className="mt-12 flex flex-col space-y-4 pl-40">
          <tr className="flex w-full items-center md:w-4/5 ">
            <td className="planBox">Monthly/Yearly</td>
            <td className="planBox">Mobile</td>
            <td className="planBox">Basic</td>
            <td className="planBox">Standard</td>
            <td className="planBox2">Premium</td>
          </tr>
          <tr className="flex w-full items-center md:w-4/5">
            <td className="planBox1">Monthly Price</td>
            <td className="planBox1">1000</td>
            <td className="planBox1">2000</td>
            <td className="planBox1">5000</td>
            <td className="planBox1 text-[#1e4c90]">7000</td>
          </tr>
          <div className=" border-t border-gray-400"></div>

          <tr className="flex w-full items-center md:w-4/5">
            <td className="planBox1">Video Quality</td>
            <td className="planBox1">Good</td>
            <td className="planBox1">Good</td>
            <td className="planBox1">Better</td>
            <td className="planBox1 text-[#1e4c90]">Best</td>
          </tr>
          <div className=" border-t border-gray-400"></div>
          <tr className="flex w-full items-center md:w-4/5">
            <td className="planBox1">Resolution</td>
            <td className="planBox1">480p</td>
            <td className="planBox1">480p</td>
            <td className="planBox1">1080p</td>
            <td className="planBox1 text-[#1e4c90]">4k+HDR</td>
          </tr>
          <div className=" border-t border-gray-400"></div>
          <tr className="flex w-full items-center md:w-4/5">
            <td className="planBox1">Devices you can watch</td>
            <td className="planBox1">Phone</td>
            <td className="planBox1">Phone</td>
            <td className="planBox1">Phone</td>
            <td className="planBox1 text-[#1e4c90]">Phone</td>
          </tr>
          <tr className="flex w-full items-center md:w-4/5">
            <td className="planBox1"></td>
            <td className="planBox1">Tablet</td>
            <td className="planBox1">Tablet</td>
            <td className="planBox1">Tablet</td>
            <td className="planBox1 text-[#1e4c90]">Tablet</td>
          </tr>
          <tr className="flex w-full items-center md:w-4/5">
            <td className="planBox1"></td>
            <td className="planBox1"></td>
            <td className="planBox1">Computer</td>
            <td className="planBox1">Computer</td>
            <td className="planBox1 text-[#1e4c90]">Computer</td>
          </tr>
          <tr className="flex w-full items-center md:w-4/5">
            <td className="planBox1"></td>
            <td className="planBox1"></td>
            <td className="planBox1">TV</td>
            <td className="planBox1">TV</td>
            <td className="planBox1 text-[#1e4c90]">TV</td>
          </tr>
        </table>
      </center>
      <form action="/api/checkout_sessions" method="POST">
        <section>
          <button type="submit" role="link" className="ml-6">
            Next
          </button>
        </section>
        <style jsx>
          {`
            section {
              background: #ffffff;
              display: flex;
              flex-direction: column;
              width: 300px;
              height: 112px;
              border-radius: 6px;
              justify-content: space-around;
              margin-left: 500px;
            }
            button {
              height: 36px;
              background: #1e4c90;
              border-radius: 4px;
              color: white;
              border: 0;
              font-weight: 600;
              cursor: pointer;
              transition: all 0.2s ease;
              box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
            }
            button:hover {
              opacity: 0.8;
            }
          `}
        </style>
        <button
          className="text-lg font-medium hover:underline "
          onClick={logout}
        >
          Sign Out
        </button>
      </form>
    </div>
  );
};

export default HomePage;
