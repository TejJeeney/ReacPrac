import { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import {InputBox} from './components' 


function App() {

  const [fromCurrency, setFromCurrency] = useState("usd")
  const [toCurrency, setToCurrency] = useState("inr")
  const [amount, setAmount] = useState(0)
  const [amountConverted, setAmountConverted] = useState(0)

  const currencyInfo = useCurrencyInfo(fromCurrency)

  const currencyOptions = Object.keys(currencyInfo)
  console.log(currencyOptions)

  const swap = () => {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
    setAmountConverted(0)
    setAmount(amountConverted)
  }

  const convert = () => {
    setAmountConverted((amount * currencyInfo[toCurrency]).toFixed(2))
  }

  const BackgroundImage = 'https://sdmntprcentralus.oaiusercontent.com/files/00000000-fdcc-61f5-9f93-762fa1f41da3/raw?se=2025-09-07T21%3A24%3A49Z&sp=r&sv=2024-08-04&sr=b&scid=25f1989b-f068-5ec1-a4d6-939361a50b5f&skoid=24a7dec3-38fc-4904-b888-8abe0855c442&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-09-07T08%3A43%3A25Z&ske=2025-09-08T08%3A43%3A25Z&sks=b&skv=2024-08-04&sig=jO%2B7in17HRT4jj5bgZ%2BsXKYLzFKbxWbzzyNq5xV7nr0%3D' 

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url('${BackgroundImage}')`,
      }}
    >
  
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-slate-50/30 shadow-lg">
          
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1 bg-[#525252]">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={currencyOptions}
                onCurrencyChange={(currency) => setFromCurrency(currency)}
                selectCurrency={fromCurrency}
                onAmountChange={(amount) => setAmount(amount)}
                amountDisable={false}
                currencyDisable={false}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={amountConverted}
                currencyOptions={currencyOptions}
                onCurrencyChange={(currency) => setToCurrency(currency)}
                selectCurrency={toCurrency}
                amountDisable={true}
                currencyDisable={false}
              />
            </div>
            <button type="submit" className="w-full bg-pink-600 text-white px-4 py-3 rounded-lg">
              Convert {amount} {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    
    </div>
  );
}

export default App
