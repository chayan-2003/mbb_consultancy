import React from 'react';

const Works = () => {
  const projectsList = [
    { description: "Railway Siding Feasibility Study and obtaining in-principle approval from Railway for laying Railway Siding for proposed Oil Depot and LPG Plant facility at Warisaligang", organization: "Bharat Petroleum Corporation Limited" },
    { description: "FSR Study & In Principle approval of a Private Siding for LPG Plant at Kanpur, Dehat", organization: "Bharat Petroleum Corporation Limited" },
    { description: "Preparation of Engineering Scale Plan, DPR and other related consultancy services for development of a Private Railway Siding taking off from Warisaliganj Station, under Danapur Division of E.C. Rly.", organization: "Bharat Petroleum Corporation Limited" },
    { description: "Preparation of DPR and ESP Approval for Proposed Railway Siding at Rasulpur, Akbarpur, Kanpur Dehat for proposed LPG Plant at Kanpur Dehat", organization: "Bharat Petroleum Corporation Limited" },
    { description: "Preparation Of PFR Report Railway Feasibility Study for proposed LPG Plant and Ethanol Storage facility at Goraul, District Vaishali.", organization: "Bharat Petroleum Corporation Limited" },
    { description: "Railway Siding Feasibility Study and obtaining in-principle approval from Railway for laying Railway Siding for proposed LPG Plant at Kumarbagh", organization: "Bharat Petroleum Corporation Limited" },
    { description: "Preparation and submission of Conceptual plan and pre-feasibility report for construction of Railway unloading siding at Ennore coastal Installation as per the Railway guidelines.", organization: "Bharat Petroleum Corporation Limited" },
    { description: "Construction Management including supervision of the proposed Railway Siding for proposed POL terminal at Lakholi under South East Central Railway.", organization: "IOT Infrastructure & Energy Services Ltd." },
    { description: "Consultancy Services for 3rd & 4TH Line Railway Track in existing Siding of SMEL taking off from Rengali Railway Station under Sambalpur Division of East Coast Railway.", organization: "Shyam Metalics and Energy Limited." },
    { description: "Preparation and approval of Feasibility Report and Detailed Project Report for the proposed 3rd and 4th Line with provision of Wagon Tippler of M/s. Shyam Sel & Power Limited’s existing Private Railway Siding near Tapsi Railway Station under Asansol Division of Eastern Railway.", organization: "Shyam Sel and Power Ltd." },
    // Continue adding all 30 works in the same format...
    { description: "Construction Management including supervision of Railway Siding near Tapasi in Asansol Division of Eastern Railway.", organization: "Shyam Sel Limited" },
    { description: "Project Management Consultancy for construction of a Private Siding near Rajgram, Howrah Division.", organization: "Shivam Stone Works" },
    { description: "Preparation of GAD, Design & Detail Drawing for bridges (minor & major) in connection with Dankuni-Furfura Sharif Project.", organization: "Rail Vikas Nigam Limited" },
    { description: "Providing Consultancy Services for Detailed Engineering Design & Drawing of Major/Minor Bridges foundation/substructures in connection with proposed Doubling between Rajgoda – Tamluk (Junction Cabin) in Kharagpur Division of South Eastern Railway.", organization: "Rail Vikas Nigam Limited" },
    { description: "Panskura-Kharagpur 3rd Line work of S.E. Railway – Preparation of designs and drawings for minor bridges.", organization: "Rail Vikas Nigam Limited" },
    { description: "Consultancy Services to carry out feasibility study to provide full rake BG siding at Ramnagar/Silchar (Moinerband) of IOCL in North East India.", organization: "Indian Oil Corporation Limited." },
    { description: "Consultancy Services to carry out feasibility study to provide full rake BG siding at Doimukh Depot of IOCL in North East India.", organization: "Indian Oil Corporation Limited." },
    { description: "Consultancy Services to carry out feasibility study to provide full rake BG siding at Missamari Depot of IOCL in North East India.", organization: "Indian Oil Corporation Limited." },
    { description: "Preparation of feasibility report and field survey with respect to land selection for Railway siding at Proposed Marketing Terminal of IOC at Agartala (Jirania).", organization: "Indian Oil Corporation Limited." },
    { description: "Construction Management including supervision of the proposed Railway Siding beside Line No. 3 of PANEM’s proposed Silo Project at Pakur of Eastern Railway.", organization: "Bengal Emta Coal Mines Ltd." },
    { description: "Feasibility and DPR of a Private Railway Siding taking off from a suitable point near Madhaipur Colliery Siding under Eastern Railway.", organization: "DVC Emta Coal Mines Limited." },
    { description: "Construction Management including supervision of the proposed remodeling and extension of the Private Siding to facilitate provision of SILO (Rapid Loading System) at Pakur under Eastern Railway.", organization: "Panem Coal Mines Ltd." },
    { description: "Final Location survey of the proposed extension of the Private Railway Siding beyond Ch. 8113M upto Kalkipara near the OCM, in the Pachwara Coal Belt.", organization: "Panem Coal Mines Ltd." },
    { description: "Engineering Survey and preparation of Engineering Layout Plan with all required drawings for provision of a Siding at Joda of S.E. Railway for Tata Steel Limited.", organization: "L&T" },
    { description: "Preliminary Engineering Survey for construction of new B.G. Rail Line between Sankrail to Majherhat including Terminal facilities at Majherhat/Eastern Railway etc.", organization: "S.E. Railway" },
    { description: "Execution of works for Picking up of final alignment in connection with doubling between Champajharan and Bimlagarh station in Dumetra – Bimlagarh section in the jurisdiction of Dy. Chief Engineer/Con/Rourkela/S.E. Railway.", organization: "S.E. Railway" },
    { description: "Carrying out PETS for the proposed new broad gauge railway line between Digha and Kulpi via Raichak.", organization: "S.E. Railway" },
    { description: "Execution of works for preparation of Land Schedule of the new Branch Line from Bargachia to Champadanga (Approx – 27.40 Kms) in connection with Howrah – Amta New Line Project of S.E. Railway.", organization: "S.E. Railway" },
    { description: "Consultancy Services for preparation of Feasibility Report and DPR to set up a Railway Siding taking off from Godapiasol Railway Station in South Eastern Railway’s jurisdiction.", organization: "OCL India Limited" },
    { description: "Consultancy Services for construction of a Railway Siding near Lanka Railway Station under Lumding Division of Northeast Frontier Railway.", organization: "CALCOM Cement India Limited" },
    { description: "Construction of a Private Railway Siding at Kirodimal Nagar in the Raigarh-Bilaspur Section of S.E.C. Railway.", organization: "Jindal Steel & Power Limited" },
    { description: "Detailed Engineering and Construction Management for the proposed Railway Siding facilities at Majri Railway Station on Central Railway for Karnataka EMTA Coal Mines Litd. (KECML).", organization: "Karnataka EMTA Coal Mines Limited" },
    { description: "Construction Management of the proposed Railway Siding at Gua, including day-to-day supervision.", organization: "Usha Martin Limited" },
    { description: "Consultancy for Feasibility study, Final Location Survey, Detailed Engineering, Detailed Projects Report and Project Management Consultancy Services for Construction of Railways Sidings at Station Bandel, Hooghly, West Bengal", organization: "Adani Agri Logistics Ltd." },
    { description: "Construction, supervision job in connection with the upcoming Private Siding at at Dagori Railway Station, S.E.C. Railway, Bilaspur.", organization: "Nova Iron & Steel Ltd." },
    { description: "Feasibility Study to provide LPG and OIL Decanting Siding of HPCL taking off from the mid section of Basugaon and Dangtal Station under Alipurduar Division of N. F. Railway.", organization: "HPCL" },
    { description: "Feasibility Study to provide LPG and OIL Decanting Siding of HPCL taking off from Dangtal Station under Alipurduar Division of N. F. Railway.", organization: "HPCL" },
    { description: "Consultancy Services for survey and preparation of ESP for a Private Railway Siding taking off from IKRA Station under Asansol Division of E. Railway.", organization: "Reshmi Group" },
    { description: "Consultancy Services for survey and preparation of ESP for a Private Railway Siding taking off from IB Station under Bilaspur Division of S.E.C. Railway.", organization: "Reshmi Group" },
    { description: "Preparation and approval of ESP for development of a Greenfield PFT taking off from Shibpur Station under Dhanbad Division of E.C. Railway.", organization: "Godavari Commodities Pvt. Ltd." },
    { description: "Preparation and approval of Detailed Project Report with ESP for development of a Greenfield PFT taking off from Churki Station under Dhanbad Division of E.C. Railway.", organization: "Godavari Commodities Pvt. Ltd." },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
            <div className="p-6">
              <h1 className="text-3xl font-semibold mb-6">List of Works Executed/Being Executed</h1>

              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 py-2 px-4">SL. No.</th>
                    <th className="border border-gray-300 py-2 px-4">Description of Works</th>
                    <th className="border border-gray-300 py-2 px-4">Organisation</th>
                  </tr>
                </thead>
                <tbody>
                  {projectsList.map((project, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-300 py-2 px-4">{index + 1}</td>
                      <td className="border border-gray-300 py-2 px-4">{project.description}</td>
                      <td className="border border-gray-300 py-2 px-4">{project.organization}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
