import axios from 'axios';
import React, { useState } from 'react'
import { server } from '../server';

const OilRecommendation = () => {
    const [engineCC, setEngineCC] = useState('');
    const [mileage, setMileage] = useState('');
    const [recommendations, setRecommendations] = useState(null);
    const [error, setError] = useState(null);
    const [viscosityMatch, setViscosityMatch] = useState(null);
  
    const handleRecommendation = async () => {
      try {
        const response = await axios.post(`${server}/product/oil-recommendations`, { engineCC, mileage });
        const { recommended_oil, brand_names } = response.data;
  
        const viscosityPattern = /\b\d{1,2}W-\d{1,2}\b/;
        const viscosityMatch = recommended_oil.match(viscosityPattern);
          setViscosityMatch(viscosityMatch[0]);
       console.log(viscosityMatch);
        setRecommendations({ recommended_oil: recommended_oil.split('\n'), brand_names: brand_names.split('\n') });
        setError(null); // Clear any previous error
    } catch (error) {
        console.error('Error fetching recommendations:', error);
        setError('Error fetching recommendations. Please try again later.');
        setRecommendations(null); // Reset recommendations on error
    }
    };
  
    return (
        <div className={` container  pt-5 pb-5  lg:mt-[50px] lg:min-h-[70vh]`} >
            <div className={``}>
                <div className="ml-5">
                    <div className="mb-5">
                        <h1 className="text-2xl lg:text-4xl text-gray-700 font-bold underline decoration-wavy decoration-rose-500">Engine Oil Recommendation</h1>
                    </div>
  
                    <div className="flex flex-col mt-2">
                        <label className=" text-gray-800 font-semibold text-sm" htmlFor="cc">Enter the Engine CC of your Car</label>
                        <input type="number" value={engineCC} onChange={(e) => setEngineCC(e.target.value)} name="cc" id="" className="ring-1 ring-inset ring-gray-400 focus:text-gray-80 focus:ring-0 outline-none h-[40px] rounded-md 370px:w-[300px] lg:w-[600px]" />
                    </div>
  
                    <div className="flex flex-col mt-2">
                        <label className=" text-gray-800 font-semibold text-sm" htmlFor="cc">Enter the Mileage of your Car</label>
                        <input type="number" value={mileage} onChange={(e) => setMileage(e.target.value)} name="cc" id="" className="rounded-md outline-none focus:ring-0 ring-1 ring-inset ring-gray-400 focus:text-gray-800 370px:w-[300px] lg:w-[600px] h-[40px]" />
                    </div>
  
                    <div className="mt-5">
                        <button onClick={handleRecommendation} className="inline-block py-1 px-5 rounded-l-md rounded-t-md bg-[#000] hover:bg-white hover:text-[#000] focus:text-[#000] focus:bg-gray-200 text-gray-50 font-bold leading-loose transition duration-200 focus:border focus:border-red-600">
                            Get Recommendations
                        </button>
                    </div>
                </div>
            </div>
  
            {error && (
                <div className="mt-5 ml-5 text-red-500">{error}</div>
            )}
  
            {recommendations && (
      <div className="mt-5 ml-5">
          <h2 className="text-xl font-semibold text-gray-800">Recommended Engine Oil:</h2>
          <ul className="list-disc ml-5 mt-2">
              <li>{recommendations.recommended_oil}</li>
          </ul>
          <h2 className="text-xl font-semibold text-gray-800 mt-5">Brand Names:</h2>
          <ul className="list-disc ml-5 mt-2">
              {typeof recommendations.brand_names === 'string' ? (
                  recommendations.brand_names.split('\n').map((brand, index) => (
                      <li key={index}>{brand}</li>
                  ))
              ) : (
                  <li>{recommendations.brand_names}</li>
              )}
          </ul>
      </div>
  
  
  
  )}
  
  
  
  
  {/* {
      recommendations &&(
          <div>
            <RecommendedOils viscosityMatch={viscosityMatch} />
          </div>
      )
  } */}
        </div> 
    );
  };

export default OilRecommendation;