import React, { useState } from 'react';

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
    { description: "Alteration to approved Engineering Scaled Plan in connection with Two Spur Siding at HPCL, Budge Budge, Eastern Railway.", organization: "HPCL" },
    { description: "Execution of works for Picking up the alignment, Soil Investigation, design and preparation of drawings for foundation & sub-structure for construction of Major Bridges in connection with Private Siding for M/s. MCL, Sambalpur, Orissa from Jharsuguda to Sardega (50 Km.) of S.E. Railway", organization: "S.E. Rly." },
    { description: "Construction Management including supervision of Railway Siding at Jamgaon Railway Station in Raigarh District of Chhattishgarh in S.E.C. Railway.", organization: "MSP Steel and Power Ltd." },
    { description: "Construction Management of Railway Siding at Gamharia, Jamshedpur, S.E. Railway of M/s Usha Martin Limited.", organization: "Usha Martin Limited" },
    { description: "Construction, supervision job in connection with the construction of a Railway Private Siding taking off from Rourkela – Birmitrapur Section/S.E. Railway.", organization: "Adhunik Group" },
    { description: "Execution of works of Final Location survey, preparation of land schedule, soil investigation, design and preparation of drawing for foundation & substructures for construction of major bridges in connection with construction of a new line from Bankura (Chatna) to Mukutmanipur (48.25 Kms.) of S.E. Railway.", organization: "S.E. Railway" },
    { description: "Preliminary Engineering-Cum-Traffic Survey for decongestion of Howrah by shifting of suburban services to Salt Gola under Eastern Railway.", organization: "Eastern Railway" },
    { description: "Consultancy Services for BDTH and SBW in connection with construction of a Private Railway Siding within South Eastern Railway’s jurisdiction.", organization: "Electro Steel Steels Ltd." },
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
    { description: "Feasibility and DPR of a Private Railway Siding taking off from a suitable point near Madhaipur Colliery Siding under Eastern Railway.", organization: "DVC Emta Coal Mines Limited" },
    { description: "Construction Management including supervision of the proposed remodeling and extension of the Private Siding to facilitate provision of SILO (Rapid Loading System) at Pakur under Eastern Railway.", organization: "Panem Coal Mines Ltd." },
    { description: "Final Location survey of the proposed extension of the Private Railway Siding beyond Ch. 8113M upto Kalkipara near the OCM, in the Pachwara Coal Belt.", organization: "Panem Coal Mines Ltd." },
    { description: "Engineering Survey and preparation of Engineering Layout Plan with all required drawings for provision of a Siding at Joda of S.E. Railway for Tata Steel Limited.", organization: "L&T" },
    { description: "Preliminary Engineering Survey for construction of new B.G. Rail Line between Sankrail to Majherhat including Terminal facilities at Majherhat/Eastern Railway etc.", organization: "S.E. Railway" },
    { description: "Execution of works for Picking up of final alignment in connection with doubling between Champajharan and Bimlagarh station in Dumetra – Bimlagarh section in the jurisdiction of Dy. Chief Engineer/Con/Rourkela/S.E. Railway.", organization: "S.E. Railway" },
    { description: "Execution of works for preparation of Land Schedule of the new Branch Line from Bargachia to Champadanga (Approx – 27.40 Kms) in connection with Howrah – Amta New Line Project of S.E. Railway.", organization: "S.E. Railway", amount: "3.28 Lakhs" },
    { description: "Consultancy Services for preparation of Feasibility Report and DPR to set up a Railway Siding taking off from Godapiasol Railway Station in South Eastern Railway’s jurisdiction.", organization: "OCL India Limited", amount: "9.00 Lakhs" },
    { description: "Consultancy Services for construction of a Railway Siding near Lanka Railway Station under Lumding Division of Northeast Frontier Railway.", organization: "CALCOM Cement India Limited", amount: "7.00 Lakhs" },
    { description: "Construction of a Private Railway Siding at Kirodimal Nagar in the Raigarh-Bilaspur Section of S.E.C. Railway.", organization: "Jindal Steel & Power Limited", amount: "7.00 Lakhs" },
    { description: "Detailed Engineering and Construction Management for the proposed Railway Siding facilities at Majri Railway Station on Central Railway for Karnataka EMTA Coal Mines Litd. (KECML).", organization: "Karnataka EMTA Coal Mines Limited", amount: "16.98 Lakhs" },
    { description: "Construction Management of the proposed Railway Siding at Gua, including day-to-day supervision.", organization: "Usha Martin Limited", amount: "12.00 Lakhs" },
    { description: "Consultancy for Feasibility study, Final Location Survey, Detailed Engineering, Detailed Projects Report and Project Management Consultancy Services for Construction of Railways Sidings at Station Bandel, Hooghly, West Bengal", organization: "Adani Agri Logistics Ltd.", amount: "10.00 Lakhs" },
    { description: "Construction, supervision job in connection with the upcoming Private Siding at Dagori Railway Station, S.E.C. Railway, Bilaspur.", organization: "Nova Iron & Steel Ltd.", amount: "5.50 Lakhs" },
    { description: "Feasibility Study to provide LPG and OIL Decanting Siding of HPCL taking off from the mid section of Basugaon and Dangtal Station under Alipurduar Division of N. F. Railway.", organization: "HPCL", amount: "7.50 Lakhs" },
    { description: "Feasibility Study to provide LPG and OIL Decanting Siding of HPCL taking off from Dangtal Station under Alipurduar Division of N. F. Railway.", organization: "HPCL", amount: "3.75 Lakhs" },
    { description: "Consultancy Services for survey and preparation of ESP for a Private Railway Siding taking off from IKRA Station under Asansol Division of E. Railway.", organization: "Reshmi Group", amount: "" },
    { description: "Consultancy Services for survey and preparation of ESP for a Private Railway Siding taking off from IB Station under Bilaspur Division of S.E.C. Railway.", organization: "Reshmi Group", amount: "" },
    { description: "Preparation and approval of ESP for development of a Greenfield PFT taking off from Shibpur Station under Dhanbad Division of E.C. Railway.", organization: "Godavari Commodities Pvt. Ltd.", amount: "" },
    { description: "Panskura-Kharagpur 3rd Line work of S.E. Railway – Preparation of designs and drawings for minor bridges.", organization: "Rail Vikas Nigam Limited" },
    { description: "Consultancy Services to carry out feasibility study to provide full rake BG siding at Ramnagar/Silchar (Moinerband) of IOCL in North East India.", organization: "Indian Oil Corporation Limited." },
    { description: "Consultancy Services to carry out feasibility study to provide full rake BG siding at Doimukh Depot of IOCL in North East India.", organization: "Indian Oil Corporation Limited." },
    { description: "Consultancy Services to carry out feasibility study to provide full rake BG siding at Missamari Depot of IOCL in North East India.", organization: "Indian Oil Corporation Limited." },
    { description: "Preparation of feasibility report and field survey with respect to land selection for Railway siding at Proposed Marketing Terminal of IOC at Agartala (Jirania).", organization: "Indian Oil Corporation Limited." },
    { description: "Construction Management including supervision of the proposed Railway Siding beside Line No. 3 of PANEM’s proposed Silo Project at Pakur of Eastern Railway.", organization: "Bengal Emta Coal Mines Ltd." },
    { description: "Feasibility and DPR of a Private Railway Siding taking off from a suitable point near Madhaipur Colliery Siding under Eastern Railway.", organization: "DVC Emta Coal Mines Limited" },
    { description: "Construction Management including supervision of the proposed remodeling and extension of the Private Siding to facilitate provision of SILO (Rapid Loading System) at Pakur under Eastern Railway.", organization: "Panem Coal Mines Ltd." },
    { description: "Final Location survey of the proposed extension of the Private Railway Siding beyond Ch. 8113M upto Kalkipara near the OCM, in the Pachwara Coal Belt.", organization: "Panem Coal Mines Ltd." },
    { description: "Engineering Survey and preparation of Engineering Layout Plan with all required drawings for provision of a Siding at Joda of S.E. Railway for Tata Steel Limited.", organization: "L&T" },
    { description: "Preliminary Engineering Survey for construction of new B.G. Rail Line between Sankrail to Majherhat including Terminal facilities at Majherhat/Eastern Railway etc.", organization: "S.E. Railway" },
    { description: "Execution of works for Picking up of final alignment in connection with doubling between Champajharan and Bimlagarh station in Dumetra – Bimlagarh section in the jurisdiction of Dy. Chief Engineer/Con/Rourkela/S.E. Railway.", organization: "S.E. Railway" },
    { description: "Carrying out PETS for the proposed new broad gauge railway line between Digha and Kulpi via Raichak.", organization: "S.E. Railway" },
    { description: "Preparation and approval of Detailed Project Report with ESP for development of a Greenfield PFT taking off from Churki Station under Dhanbad Division of E.C. Railway.", organization: "Godavari Commodities Pvt. Ltd." },
    { description: "Preparation and approval of ESP for development of a Greenfield PFT taking off from Sunakhani Station under Khurda Road Division of E.Co. Railway.", organization: "Koli Commodities Pvt. Ltd." },
    { description: "Carrying out Consultancy work in connection with revival of existing Ramsarup siding under Kharagpur Division of S.E. Railway.", organization: "SMEL/RIL" },
    { description: "Alteration to approved Engineering Scaled Plan in connection with Two Spur Siding at HPCL, Budge Budge, Eastern Railway.", organization: "HPCL" },
    { description: "Execution of works for Picking up the alignment, Soil Investigation, design and preparation of drawings for foundation & sub-structure for construction of Major Bridges in connection with Private Siding for M/s. MCL, Sambalpur, Orissa from Jharsuguda to Sardega (50 Km.) of S.E. Railway", organization: "S.E. Rly." },
    { description: "Construction Management including supervision of Railway Siding at Jamgaon Railway Station in Raigarh District of Chhattishgarh in S.E.C. Railway.", organization: "MSP Steel and Power Ltd." },
    { description: "Construction Management of Railway Siding at Gamharia, Jamshedpur, S.E. Railway of M/s Usha Martin Limited.", organization: "Usha Martin Limited" },
    { description: "Construction, supervision job in connection with the construction of a Railway Private Siding taking off from Rourkela – Birmitrapur Section/S.E. Railway.", organization: "Adhunik Group" },
    { description: "Execution of works of Final Location survey, preparation of land schedule, soil investigation, design and preparation of drawing for foundation & substructures for construction of major bridges in connection with construction of a new line from Bankura (Chatna) to Mukutmanipur (48.25 Kms.) of S.E. Railway", organization: "S.E. Railway" },
    { description: "Preliminary Engineering-Cum-Traffic Survey for decongestion of Howrah by shifting of suburban services to Salt Gola under Eastern Railway.", organization: "Eastern Railway" },
    { description: "Consultancy Services for BDTH and SBW in connection with construction of a Private Railway Siding within South Eastern Railway’s jurisdiction.", organization: "Electro Steel Steels Ltd." },
    { description: "Construction Management including supervision of Railway Siding near Tapasi in Asansol Division of Eastern Railway.", organization: "Shyam Sel Limited" },
    { description: "Project Management Consultancy for construction of a Private Siding near Rajgram, Howrah Division.", organization: "Shivam Stone Works" },
    { description: "Preparation of GAD, Design & Detail Drawing for bridges (minor & major) in connection with Dankuni-Furfura Sharif Project.", organization: "Rail Vikas Nigam Limited" },
    { description: "Providing Consultancy Services for Detailed Engineering Design & Drawing of Major/Minor Bridges foundation/substructures in connection with proposed Doubling between Rajgoda – Tamluk (Junction Cabin) in Kharagpur Division of South Eastern Railway.", organization: "Rail Vikas Nigam Limited" },
  ];
  const uniqueProjects = projectsList.filter(
    (project, index, self) =>
      index ===
      self.findIndex(
        (p) => p.description === project.description && p.organization === project.organization
      )
  );

  const [selectedOrganization, setSelectedOrganization] = useState('');

  // Get unique organizations from the filtered projects
  const uniqueOrganizations = [...new Set(uniqueProjects.map((project) => project.organization))];

  const filteredProjects = selectedOrganization
    ? uniqueProjects.filter((project) => project.organization === selectedOrganization)
    : uniqueProjects;
    return (
      <div className="min-h-screen bg-gray-200 p-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
            <div className="p-6">
              <h1 className="text-3xl font-semibold mb-6">List of Works Executed/Being Executed</h1>
  
              <div className="mb-4">
                <span className="mr-2">Filter by Organization:</span>
                <select
                  className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                  onChange={(e) => setSelectedOrganization(e.target.value)}
                >
                  <option value="">All Organizations</option>
                  {[...new Set(projectsList.map((project) => project.organization))].map(
                    (org, index) => (
                      <option key={index} value={org}>
                        {org}
                      </option>
                    )
                  )}
                </select>
              </div>
  
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-blue-500 text-white">
                      <th className="border border-gray-300 py-2 px-4">#</th>
                      <th className="border border-gray-300 py-2 px-4 text-lg">Description of Works</th>
                      <th className="border border-gray-300 py-2 px-4 text-lg">Organisation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredProjects.map((project, index) => (
                      <tr key={index} className="hover:bg-blue-100">
                        <td className="border border-gray-300 py-2 px-4">{index + 1}</td>
                        <td className="border border-gray-300 py-2 px-4 text-lg">{project.description}</td>
                        <td className="border border-gray-300 py-2 px-4 text-lg">{project.organization}</td>
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


