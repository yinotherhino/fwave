import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";

export default function FWave() {
   const config = {
      public_key: "FLWPUBK-8667cecf718fd4c5a67183a13d7c439d-X",
      tx_ref: Date.now().toString(),
      amount: 3,
      currency: "USD",
      payment_options: "card,mobilemoney,ussd",
      customer: {
         email: "user@gmail.com",
         phone_number: "070********",
         name: "john doe",
      },
      customizations: {
         title: "My store",
         description: "Payment for items in cart",
         logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
      },
   };

   const fwConfig = {
      ...config,
      text: "Pay with Flutterwave!",
      callback: (response: unknown) => {
         console.log(response);
         closePaymentModal(); // this will close the modal programmatically
      },
      onClose: () => {},
   };

   return (
      <div className="App">
         <h1>Hello User</h1>
         <FlutterWaveButton {...fwConfig} />
      </div>
   );
}
