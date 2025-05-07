interface ObjectsProps {
  handleObjectClick: (e: React.MouseEvent<SVGPathElement>) => void;
  className?: string;
  selectedFloor: number; // 👈 Tambahkan ini
}

function Objects({ handleObjectClick, className, selectedFloor }: ObjectsProps) {
  return (
    <>
    {selectedFloor === 1 && (
    <g id = "object1">
      <path
        id="Toilet1"
        className={`${className} object`}
        d="M188.324 154.285V188.833H167.62H146.917V154.285V119.738H167.62H188.324V154.285Z"
        onClick={handleObjectClick}
      />
      <path
        id="RT06" //alfaX
        className={`${className} object`}
        d="M57.1211 446.196V461.789H38.5248H19.9283V446.196V430.603H38.5248H57.1211V446.196Z"
        onClick={handleObjectClick}
      />
      <path
        id="FB20" //AW
        className={`${className} object`}
        d="M130.714 446.196V461.789H95.8954H61.0769V446.196V430.603H95.8954H130.714V446.196Z"
        onClick={handleObjectClick}
      />
      <path
        id="Toilet2"
        className={`${className} object`}
        d="M252.579 371.871V378.628H241.5H230.421V371.871V365.114H241.5H252.579V371.871Z"
        onClick={handleObjectClick}
      />
      <path
        id="SV28" //BNI
        className={`${className} object`}
        d="M491.562 503.37V523.121H470.987H450.412V503.37V483.619H470.987H491.562V503.37Z"
        onClick={handleObjectClick}
      />
      <path
        id="Toilet3"
        className={`${className} object`}
        d="M520.05 396.819V426.445H485.627H451.204V396.819V367.193H485.627H520.05V396.819Z"
        onClick={handleObjectClick}
      />
      <path
        id="BRI"
        className={`${className} object`}
        d="M546 503V525H534H522V503V481H534H546V503Z"
        onClick={handleObjectClick}
      />
      <path
        id="Toilet4"
        className={`${className} object`}
        d="M620 503V524H583H546V503V482H583H620V503Z"
        onClick={handleObjectClick}
      />
      <path
        id="Toilet5"
        className={`${className} object`}
        d="M609.111 319.703V352.077L611.909 353.751C613.732 354.843 614.707 356.623 614.707 358.865V362.304H597.978H581.25L580.912 354.586L580.573 346.868L559.03 346.469L537.488 346.07V316.7V287.329H573.299H609.111V319.703Z"
        onClick={handleObjectClick}
      />
      <path
        id="Toilet6"
        className={`${className} object`}
        d="M480.412 108.712V116.797H465.864H451.315V108.712V100.626H465.864H480.412V108.712Z"
        onClick={handleObjectClick}
      />
      <path
        id="FB19" //Expat
        className={`${className} object`}
        d="M685.438 502.33V521.042H663.281H641.124V502.33V483.619H663.281H685.438V502.33Z"
        onClick={handleObjectClick}
      />
      <path
        id="Mus1"
        className={`${className} object`}
        d="M651.638 107.977V113.857H637.089H622.541V107.977V102.096H637.089H651.638V107.977Z"
        onClick={handleObjectClick}
      />
      <path
        id="Toilet7"
        className={`${className} object`}
        d="M685.21 107.977V115.327H671.781H658.352V107.977V100.626H671.781H685.21V107.977Z"
        onClick={handleObjectClick}
      />
      <path
        id="RT04" //Sandang Pangan
        className={`${className} object`}
        d="M848.452 503.37V522.081H817.59H786.728V503.37V484.659H817.59H848.452V503.37Z"
        onClick={handleObjectClick}
      />
      <path
        id="UM01" //Titian Rasa
        className={`${className} object`}
        d="M912.55 503.37V522.081H882.479H852.409V503.37V484.659H882.479H912.55V503.37Z"
        onClick={handleObjectClick}
      />
      <path
        id="FB18" //RotiO
        className={`${className} object`}
        d="M944.995 503.37V522.081H931.147H917.298V503.37V484.659H931.147H944.995V503.37Z"
        onClick={handleObjectClick}
      />
      <path
        id="FB17" //Kedai Mj
        className={`${className} object`}
        d="M1044 503.5V524.675H1014V523H1013H996.5H949V503.5V484H1008H1014V481.5H1043.78L1044 503.5Z"
        onClick={handleObjectClick}
      />
      <path
        id="RT03" //AlfaX
        className={`${className} object`}
        d="M1108.01 503.37V522.081H1084.66H1061.32V503.37V484.659H1084.66H1108.01V503.37Z"
        onClick={handleObjectClick}
      />
      <path
        id="FB14A" //LaPetitte
        className={`${className} object`}
        d="M1141.25 502.85V522.081H1127H1112.76V502.85V483.619H1127H1141.25V502.85Z" 
        onClick={handleObjectClick}
      />
      <path
        id="RT02B" //Boga
        className={`${className} object`}
        d="M1202.11 485.12C1201.93 485.373 1195.63 493.793 1188.11 503.831L1174.45 522.081H1159.82H1145.2V503.37V484.659H1173.82C1189.56 484.659 1202.29 484.866 1202.11 485.12Z"
        onClick={handleObjectClick}
      />
      <path
        id="Toilet8"
        className={`${className} object`}
        d="M1172.02 418.168V425.519H1158.6H1145.17V418.168V410.818H1158.6H1172.02V418.168Z"
        onClick={handleObjectClick}
      />
      <path
        id="Toilet9"
        className={`${className} object`}
        d="M1132.86 207.209V212.354H1122.78H1112.71V207.209V202.063H1122.78H1132.86V207.209Z"
        onClick={handleObjectClick}
      />
      <path
        id="Toilet10"
        className={`${className} object`}
        d="M1187.69 124.148V137.379H1182.1H1176.5V124.148V110.917H1182.1H1187.69V124.148Z"
        onClick={handleObjectClick}
      />
      <path
        id="Mus3"
        className={`${className} object`}
        d="M1253.72 118.268V137.379H1221.83H1189.93V122.678V107.977H1183.22H1176.5V103.567V99.1563H1215.11H1253.72V118.268Z"
        onClick={handleObjectClick}
      />
      <path
        id="CSAirline"
        className={`${className} object`}
        d="M1335.12 503.37V523.121H1288.64H1242.16L1257.17 503.37L1272.19 483.619H1303.66H1335.12V503.37Z"
        onClick={handleObjectClick}
      />
      <path
        id="Toilet11"
        className={`${className} object`}
        d="M1367.57 503.89V522.081H1354.11H1340.66V503.89V485.698H1354.11H1367.57V503.89Z"
        onClick={handleObjectClick}
      />
      <path
        id="FB14" //Boga
        className={`${className} object`}
        d="M1431.66 503.37V523.121H1402.78H1373.9V503.37V483.619H1402.78H1431.66V503.37Z" 
        onClick={handleObjectClick}
      />
      <path
        id="Toilet12"
        className={`${className} object`}
        d="M1464.9 503.89V522.081H1451.45H1437.99V503.89V485.698H1451.45H1464.9V503.89Z"
        onClick={handleObjectClick}
      />
      <path
        id="Toilet13"
        className={`${className} object`}
        d="M1386.89 379.946V391.706H1379.62H1372.35V379.946V368.185H1379.62H1386.89V379.946Z"
        onClick={handleObjectClick}
      />
      <path
        id="Toilet14"
        className={`${className} object`}
        d="M1400.32 205.004V213.824H1385.78H1371.23V205.004V196.183H1385.78H1400.32V205.004Z"
        onClick={handleObjectClick}
      />
      <path
        id="Toilet15"
        className={`${className} object`}
        d="M1498.81 235.876V254.987H1490.53C1484.02 254.987 1482.11 255.482 1481.58 257.312C1481.21 258.591 1480.9 270.499 1480.9 283.774V307.911H1475.31H1469.71V300.174C1469.71 293.56 1470.08 292.226 1472.23 290.986C1474.36 289.759 1474.75 288.397 1474.75 282.184C1474.75 275.68 1474.46 274.779 1472.23 274.364C1469.89 273.928 1469.71 273.15 1469.71 263.77V253.646L1477.82 253.214L1485.94 252.782L1486.25 234.773L1486.57 216.764H1492.69H1498.81V235.876Z"
        onClick={handleObjectClick}
      />
      <path
        id="SV22" //Bagggage Sol
        className={`${className} object`}
        d="M1424 267V275H1397.5H1371V267V259H1397.5H1424V267Z"
        onClick={handleObjectClick}
      />
      <path
        id="FB16" //Circle K
        className={`${className} object`}
        d="M1466.35 382.886V399.057H1474.19H1482.02V412.288V425.519H1460.37H1438.71L1437.98 409.854C1437.58 401.238 1437.25 388.007 1437.25 380.452V366.715H1451.8H1466.35V382.886Z"
        onClick={handleObjectClick}
      />
      <path
        id="FB15" //Papan Dhahar
        className={`${className} object`}
        d="M1530.14 412.288V425.519H1508.88H1487.61V412.288V399.057H1508.88H1530.14V412.288Z"
        onClick={handleObjectClick}
      />
      <path
        id="FB9A" //rOTI o
        className={`${className} object`}
        d="M1431.66 417.433V424.049H1407.6C1386.96 424.049 1383.54 423.735 1383.54 421.843C1383.54 420.249 1384.78 419.638 1388.04 419.638C1392.15 419.638 1392.6 419.252 1393.22 415.228L1393.89 410.818H1412.77H1431.66V417.433Z"
        onClick={handleObjectClick}
      />
      <path
        id="FB13A" //Cerita Roti by kopken
        className={`${className} object`}
        d="M1498.93 503.37V523.121H1492.6H1486.27V503.37V483.619H1492.6H1498.93V503.37Z" 
        onClick={handleObjectClick}
      />
      <path
        id="FB13" //Dunkin
        className={`${className} object`}
        d="M1531.37 503.37V523.121H1517.13H1502.88V503.37V483.619H1517.13H1531.37V503.37Z" 
        onClick={handleObjectClick}
      />
      <path
        id="FB12A" //WingMan
        className={`${className} object`}
        d="M1596.26 503.37V523.121H1566.19H1536.12V503.37V483.619H1566.19H1596.26V503.37Z" 
        onClick={handleObjectClick}
      />
      <path
        id="RT02" //Boga
        className={`${className} object`}
        d="M1756.11 503.37V523.121H1726.44H1696.76V503.37V483.619H1726.44H1756.11V503.37Z" 
        onClick={handleObjectClick}
      />
      <path
        id="FB12" //Rotiboy
        className={`${className} object`}
        d="M1822.58 503.37V523.121H1791.32H1760.07V503.37V483.619H1791.32H1822.58V503.37Z" 
        onClick={handleObjectClick}
      />
      <path
        id="FB11" //JavaCafe
        className={`${className} object`}
        d="M1865.15 484.709C1877.9 491.427 1877.88 514.513 1865.13 521.512C1862.78 522.802 1858.67 523.121 1844.37 523.121H1826.54V503.37V483.619L1844.94 483.685C1855.06 483.721 1864.15 484.182 1865.15 484.709Z" 
        onClick={handleObjectClick}
      />
      <path
        id="RT2A" //Circle K
        className={`${className} object`}
        d="M1727 417.5V426H1712H1697V417.5V409H1712H1727V417.5Z" 
        onClick={handleObjectClick}
      />
      <path
        id="FB10" //AW
        className={`${className} object`}
        d="M1843.95 374.469V382.786H1849.88H1855.82V405.135V427.485H1825.35H1794.89V396.819V366.153H1819.42H1843.95V374.469Z" 
        onClick={handleObjectClick}
      />
      <path
        id="Toilet16"
        className={`${className} object`}
        d="M1821.79 190.995V197.751H1808.34H1794.89V190.995V184.238H1808.34H1821.79V190.995Z" 
        onClick={handleObjectClick}
      />
      <path
        id="FB09A" //MMjuice
        className={`${className} object`}
        d="M1909.68 292.661C1909.68 314.113 1908.5 312.5 1914 312.5C1915.23 312.5 1914.5 316.504 1914.5 339.5L1914.5 363.5H1895.5H1879.5L1878.5 361L1877 358L1874.5 353L1871.5 347L1871 318.5V274H1889.52H1909.68V291.954V292.661Z"
        onClick={handleObjectClick}
      />
      <path
        id="Mus3" 
        className={`${className} object`}
        d="M1995.09 290.788V305.861H1955.13H1915.17V290.788V275.715H1955.13H1995.09V290.788Z" 
        onClick={handleObjectClick}
      />
      <path
        id="cordia" //CORDIA HOTEL
        className={`${className} object`}
        d="M1985 324V335H1955.5H1926V324V313H1955.5H1985V324Z" 
        onClick={handleObjectClick}
      />
      <path
        id="FB09" //SoerabajaCafe
        className={`${className} object`}
        d="M2050.49 311.866V349.057L2045.12 356.046L2039.76 363.035H2031.28H2022.79V318.855V274.676H2036.64H2050.49V311.866Z" 
        onClick={handleObjectClick}
      />
      <path
        id="Toilet17" 
        className={`${className} object`}
        d="M2115.38 190.995V197.751H2101.92H2088.47V190.995V184.238H2101.92H2115.38V190.995Z"  
        onClick={handleObjectClick}
      />
      <path
        id="FB08" //solaria
        className={`${className} object`}
        d="M2115.38 397.339V427.485H2084.91H2054.44V416.164V404.844L2069.15 386.018L2083.85 367.193H2099.61H2115.38V397.339Z"  
        onClick={handleObjectClick}
      />
      <path
        id="Kemenkes" //kemenkes
        className={`${className} object`}
        d="M2180 417.5V427H2166H2152V417.5V408H2166H2180V417.5Z"  
        onClick={handleObjectClick}
      />
      <path
        id="Toilet18" 
        className={`${className} object`}
        d="M2211.92 418.129V425.406H2198.47H2185.01V418.129V410.853H2198.47H2211.92V418.129Z"  
        onClick={handleObjectClick}
      />
      <path
        id="Toilet19"
        className={`${className} object`}
        d="M2211.92 379.667V391.102H2202.42H2192.93V379.667V368.232H2202.42H2211.92V379.667Z"  
        onClick={handleObjectClick}
      />
      <path
        id="FB05" //Rotiboy
        className={`${className} object`}
        d="M2279.18 419.169V426.445H2263.59C2251.47 426.445 2248.21 426.168 2248.95 425.198C2249.47 424.512 2249.9 421.237 2249.9 417.921V411.892H2264.54H2279.18V419.169Z"  
        onClick={handleObjectClick}
      />
      <path
        id="FB07" //Soto Bangkalan
        className={`${className} object`}
        d="M2082.93 503.301V523.121L2066.51 523.114C2056.92 523.111 2048.77 522.628 2046.93 521.955C2042.8 520.451 2037.51 513.485 2036.23 507.882C2034.42 499.963 2036.85 492.106 2042.68 487.038L2046.01 484.138L2064.47 483.809L2082.93 483.48V503.301Z"  
        onClick={handleObjectClick}
      />
      <path
        id="FB6A" //Beard Papas
        className={`${className} object`}
        d="M2150.19 503.37V523.121H2135.16H2120.12V503.37V483.619H2135.16H2150.19V503.37Z"  
        onClick={handleObjectClick}
      />
      <path
        id="RT01" //Alfa Xpress
        className={`${className} object`}
        d="M2211.92 503.37V523.121H2183.03H2154.15V503.37V483.619H2183.03H2211.92V503.37Z"  
        onClick={handleObjectClick}
      />
      <path
        id="Toilet20"
        className={`${className} object`}
        d="M2245.15 502.85V520.002H2231.7H2218.25V502.85V485.698H2231.7H2245.15V502.85Z"  
        onClick={handleObjectClick}
      />
      <path
        id="FB04" //Dunkin
        className={`${className} object`}
        d="M2375.72 503.37V522.081H2361.48H2347.24V503.37V484.659H2361.48H2375.72V503.37Z"  
        onClick={handleObjectClick}
      />
      <path
        id="Toilet21"
        className={`${className} object`}
        d="M2504.71 502.85V520.002H2491.65H2478.6V502.85V485.698H2491.65H2504.71V502.85Z"  
        onClick={handleObjectClick}
      />
      <path
        id="FB3A" //LAcafe
        className={`${className} object`}
        d="M2541.11 503.37V522.081H2525.68H2510.25V503.37V484.659H2525.68H2541.11V503.37Z"  
        onClick={handleObjectClick}
      />
      <path
        id="FB03" //Roti O cafe
        className={`${className} object`}
        d="M2571.18 419.169V426.445H2541.9H2512.62V419.169V411.892H2541.9H2571.18V419.169Z"  
        onClick={handleObjectClick}
      />
      <path
        id="Toilet22"
        className={`${className} object`}
        d="M2634.49 418.129V425.406H2613.92H2593.34V418.129V410.853H2613.92H2634.49V418.129Z"  
        onClick={handleObjectClick}
      />
      <path
        id="Toilet23"
        className={`${className} object`}
        d="M2586.22 379.667V392.141H2581.07H2575.93V379.667V367.193H2581.07H2586.22V379.667Z"  
        onClick={handleObjectClick}
      />
      <path
        id="Toilet24"
        className={`${className} object`}
        d="M2635.5 188.5H2604.1L2604.1 174.323C2604.1 173.721 2596 174.323 2604.1 174.323C2602.11 174.87 2676.5 178 2604.1 185L2604.1 230H2588.5H2576V177.5V162.5H2635.5V188.5Z"  
        onClick={handleObjectClick}
      />
      <path
        id="Toilet25"
        className={`${className} object`}
        d="M2538 242L2510 242L2510 215L2538 215L2538 242Z"
        onClick={handleObjectClick}
      />
      <path
        id="Toilet26"
        className={`${className} object`}
        d="M2895.46 122.678V135.909H2889.86H2884.27V122.678V109.447H2889.86H2895.46V122.678Z"  
        onClick={handleObjectClick}
      />
      <path
        id="Taxi" //airport taxi
        className={`${className} object`}
        d="M2831 412L2812 412L2812 364L2831 364L2831 412Z"  
        onClick={handleObjectClick}
      />
      <path
        id="Toilet27"
        className={`${className} object`}
        d="M2895.46 418.168V425.519H2882.03H2868.6V418.168V410.818H2882.03H2895.46V418.168Z"  
        onClick={handleObjectClick}
      />
      <path
        id="EP1"//timnas
        className={`${className} object`}
        d="M2636.07 503.37V523.121H2631.32H2626.58V503.37V483.619H2631.32H2636.07V503.37Z"  
        onClick={handleObjectClick}
      />
      <path
        id="SV10"//bca
        className={`${className} object`}
        d="M2700.96 503.37V523.121H2670.49H2640.03V503.37V483.619H2670.49H2700.96V503.37Z"  
        onClick={handleObjectClick}
      />
      <path
        id="SV09" //bank jatim
        className={`${className} object`}
        d="M2765.06 503.37V523.121H2734.99H2704.92V503.37V483.619H2734.99H2765.06V503.37Z"  
        onClick={handleObjectClick}
      />
      <path
        id="FB02" //bakmi gocit
        className={`${className} object`}
        d="M2830.74 503.37V523.121H2800.27H2769.81V503.37V483.619H2800.27H2830.74V503.37Z"  
        onClick={handleObjectClick}
      />
      <path
        id="FB01" //AW
        className={`${className} object`}
        d="M2928.86 488.78V523.121H2882.18H2835.49L2835.5 499.472C2835.52 477.943 2835.67 475.403 2837.13 471.145C2839.1 465.418 2842.75 460.267 2846.96 457.28C2850.07 455.074 2850.86 455.027 2889.5 454.735L2928.86 454.439L2928.86 488.78Z"  
        onClick={handleObjectClick}
      />
      <path
        id="FB1B" //Famima
        className={`${className} object`}
        d="M2994.55 545.99V563.662H2964.48H2934.41V545.99V528.318H2964.48H2994.55V545.99Z"  
        onClick={handleObjectClick}
      />

      <rect
        id="avsec"
        className={`${className} object`}
        x="2000"
        y="313"
        width="18"
        height="50"
        onClick={handleObjectClick}
      />
      <rect
        id="ATM"
        className={`${className} object`}
        x="2119"
        y="366"
        width="31"
        height="61"
        onClick={handleObjectClick}
      />
      <rect
        id="CIC3" //check in counter 3
        className={`${className} object`}
        x="1604" 
        y="223" 
        width="27" 
        height="14"
        onClick={handleObjectClick}
      />
      <rect
        id="CIC2" //check in counter 2
        className={`${className} object`}
        x="1245" 
        y="223" 
        width="27" 
        height="14"
        onClick={handleObjectClick}
      />
      <rect
        id="CIC1" //check in counter 1
        className={`${className} object`}
        x="756" 
        y="223" 
        width="27" 
        height="14"
        onClick={handleObjectClick}
      />

    </g>
    )}
    
    {selectedFloor === 2 && (
     <g id="Objects2">
      <path
        id="FB20"
        className={`${className} object`}
        d="M32.1914 311.872L77.1914 311.872L77.1914 342.372L4.19141 342.372L4.19141 271.372L31.6914 271.372L31.6914 311.372L31.6914 311.872L32.1914 311.872Z"
        onClick={handleObjectClick}
      />
      <path
        id="MS1"
        className={`${className} object`}
        d="M373.691 386.372L387.191 386.372L387.191 482.372L373.691 482.372L353.191 482.372L353.191 343.372L373.191 343.372L373.191 385.872L373.191 386.372L373.691 386.372Z"
        onClick={handleObjectClick}
      />
      <path
        id="SV3"
        className={`${className} object`}
        d="M1247.15 354.372L1213.19 354.372L1213.19 328.897L1228.38 340.766L1228.39 340.772L1228.4 340.777L1247.15 354.372Z"
        onClick={handleObjectClick}
      />
      <path
        id="FB19"
        className={`${className} object`}
        d="M599.691 378.372L599.691 396.372L569.191 396.372L569.191 343.372L668.191 343.372L668.191 377.872L600.191 377.872L599.691 377.872L599.691 378.372Z"
        onClick={handleObjectClick}
      />
      <path
        id="EP9"
        className={`${className} object`}
        d="M785.164 288.372C785.164 296.38 778.672 302.872 770.664 302.872L747.664 302.872C739.656 302.872 733.164 296.38 733.164 288.372V288.372C733.164 280.364 739.656 273.872 747.664 273.872L760.364 273.872L770.664 273.872C778.672 273.872 785.164 280.364 785.164 288.372V288.372Z"
        onClick={handleObjectClick}
      />
      <path
        id="FB17"
        className={`${className} object`}
        d="M864.691 371.372L864.191 371.372L864.191 371.872L864.191 386.372L834.191 386.372L834.191 343.372L890.191 343.372L890.191 371.372L864.691 371.372Z"
        onClick={handleObjectClick}
      />
      <path
        id="EP8"
        className={`${className} object`}
        d="M1019.16 288.372C1019.16 296.38 1012.67 302.872 1004.66 302.872L981.664 302.872C973.656 302.872 967.164 296.38 967.164 288.372V288.372C967.164 280.364 973.656 273.872 981.664 273.872L994.364 273.872L1004.66 273.872C1012.67 273.872 1019.16 280.364 1019.16 288.372V288.372Z"
        onClick={handleObjectClick}
      />
      <path
        id="SV4"
        className={`${className} object`}
        d="M1033.85 358.92L1033.85 358.92L1033.86 358.915L1051.66 343.946L1051.66 371.372L1018.57 371.372L1033.85 358.92Z"
        onClick={handleObjectClick}
      />
      <path
        id="RT10"
        className={`${className} object`}
        d="M1007.19 236.372L1007.19 193.372L1269.66 193.372L1269.66 273.372L1236.98 273.372C1224.08 245.34 1211.98 229.334 1196.47 223.747C1180.92 218.146 1162.12 223.08 1136.04 236.372L1112.31 236.372C1095.7 225.799 1082.84 220.853 1070.24 221.051C1057.64 221.25 1045.4 226.588 1030.02 236.372L1007.19 236.372Z"
        onClick={handleObjectClick}
      />
      <path
        id="EP5"
        className={`${className} object`}
        d="M1617.16 287.372C1617.16 295.38 1610.67 301.872 1602.66 301.872L1579.66 301.872C1571.66 301.872 1565.16 295.38 1565.16 287.372V287.372C1565.16 279.364 1571.66 272.872 1579.66 272.872L1592.36 272.872L1602.66 272.872C1610.67 272.872 1617.16 279.364 1617.16 287.372V287.372Z"
        onClick={handleObjectClick}
      />
      <path
        id="FB15"
        className={`${className} object`}
        d="M1617.19 472.372L1514.19 472.372L1514.19 365.782L1617.19 351.447L1617.19 472.372Z"
        onClick={handleObjectClick}
      />
      <path
        id="EP2"
        className={`${className} object`}
        d="M2113.16 287.372C2113.16 295.38 2106.67 301.872 2098.66 301.872L2075.66 301.872C2067.66 301.872 2061.16 295.38 2061.16 287.372V287.372C2061.16 279.364 2067.66 272.872 2075.66 272.872L2088.36 272.872L2098.66 272.872C2106.67 272.872 2113.16 279.364 2113.16 287.372V287.372Z"
        onClick={handleObjectClick}
      />
      <path
        id="EP1"
        className={`${className} object`}
        d="M2362.16 287.372C2362.16 295.38 2355.67 301.872 2347.66 301.872L2324.66 301.872C2316.66 301.872 2310.16 295.38 2310.16 287.372V287.372C2310.16 279.364 2316.66 272.872 2324.66 272.872L2337.36 272.872L2347.66 272.872C2355.67 272.872 2362.16 279.364 2362.16 287.372V287.372Z"
        onClick={handleObjectClick}
      />
      <path
        id="FB7"
        className={`${className} object`}
        d="M2526.66 366.872L2526.66 402.372L2491.66 402.372L2491.66 351.372L2562.66 351.372L2562.66 366.372L2527.16 366.372L2526.66 366.372L2526.66 366.872Z"
        onClick={handleObjectClick}
      />
      <path
        id="FB3"
        className={`${className} object`}
        d="M2846.16 287.372C2846.16 295.38 2839.67 301.872 2831.66 301.872L2808.66 301.872C2800.66 301.872 2794.16 295.38 2794.16 287.372V287.372C2794.16 279.364 2800.66 272.872 2808.66 272.872L2821.36 272.872L2831.66 272.872C2839.67 272.872 2846.16 279.364 2846.16 287.372V287.372Z"
        onClick={handleObjectClick}
      />
      <path
        id="FB2"
        className={`${className} object`}
        d="M3008.16 287.372C3008.16 295.38 3001.67 301.872 2993.66 301.872L2970.66 301.872C2962.66 301.872 2956.16 295.38 2956.16 287.372V287.372C2956.16 279.364 2962.66 272.872 2970.66 272.872L2983.36 272.872L2993.66 272.872C3001.67 272.872 3008.16 279.364 3008.16 287.372V287.372Z"
        onClick={handleObjectClick}
      />
      <path
        id="FB1"
        className={`${className} object`}
        d="M3174.16 349.393L3145.16 349.393L3126.16 290.872L3174.16 290.872L3174.16 349.393Z"
        onClick={handleObjectClick}
      />
      <rect
        id="MS2"
        className={`${className} object`}
        x="3121.16"
        y="289.872"
        width="35"
        height="27"
        transform="rotate(-180 3121.16 289.872)"
        onClick={handleObjectClick}
      />
      <rect
        id="TOtwin"
        className={`${className} object`}
        x="2661.16"
        y="291.872"
        width="74"
        height="27"
        transform="rotate(-180 2661.16 291.872)"
        onClick={handleObjectClick}
      />
      <rect
        id="TO1"
        className={`${className} object`}
        d=""
        x="3080.16"
        y="289.872"
        width="34"
        height="27"
        transform="rotate(-180 3080.16 289.872)"
        onClick={handleObjectClick}
      />
      <rect
        id="RT1"
        className={`${className} object`}
        x="2706.66"
        y="382.372"
        width="31"
        height="34"
        transform="rotate(-180 2706.66 382.372)"
        onClick={handleObjectClick}
      />
      <rect
        id="FB4"
        className={`${className} object`}
        x="2674.66"
        y="382.372"
        width="38"
        height="34"
        transform="rotate(-180 2674.66 382.372)"
        onClick={handleObjectClick}
      />
      <rect
        id="FB5"
        className={`${className} object`}
        x="2636.66"
        y="382.372"
        width="35"
        height="34"
        transform="rotate(-180 2636.66 382.372)"
        onClick={handleObjectClick}
      />
      <rect
        id="FB6"
        className={`${className} object`}
        x="2601.66"
        y="382.372"
        width="35"
        height="34"
        transform="rotate(-180 2601.66 382.372)"
        onClick={handleObjectClick}
      />
      <rect
        id="FB8"
        className={`${className} object`}
        x="2475.66"
        y="382.372"
        width="48"
        height="31"
        transform="rotate(-180 2475.66 382.372)"
        onClick={handleObjectClick}
      />
      <rect
        id="FB8A"
        className={`${className} object`}
        x="2510.16"
        y="292.872"
        width="68"
        height="32"
        transform="rotate(-180 2510.16 292.872)"
        onClick={handleObjectClick}
      />
      <rect
        id=""
        className={`${className} object`}
        d=""
        onClick={handleObjectClick}
      />
      <rect
        id="FB9"
        className={`${className} object`}
        x="2423.66"
        y="388.372"
        width="32"
        height="37"
        transform="rotate(-180 2423.66 388.372)"
        onClick={handleObjectClick}
      />
      <rect
        id="RT2"
        className={`${className} object`}
        x="2390.66"
        y="388.372"
        width="37"
        height="37"
        transform="rotate(-180 2390.66 388.372)"
        onClick={handleObjectClick}
      />
      <rect
        id="FB9A"
        className={`${className} object`}
        x="2353.66"
        y="388.372"
        width="18"
        height="37"
        transform="rotate(-180 2353.66 388.372)"
        onClick={handleObjectClick}
      />
      <rect
        id="FB9B"
        className={`${className} object`}
        x="2371.66"
        y="388.372"
        width="18"
        height="37"
        transform="rotate(-180 2353.66 388.372)"
        onClick={handleObjectClick}
      />
      <rect
        id="RT3"
        className={`${className} object`}
        x="2318.66"
        y="388.372"
        width="38"
        height="37"
        transform="rotate(-180 2318.66 388.372)"
        onClick={handleObjectClick}
      />
      <rect
        id="RT5"
        className={`${className} object`}
        x="2280.66"
        y="388.372"
        width="35"
        height="37"
        transform="rotate(-180 2280.66 388.372)"
        onClick={handleObjectClick}
      />
      <rect
        id="BMS"
        className={`${className} object`}
        x="2427.16"
        y="542.872"
        width="138"
        height="41"
        transform="rotate(-180 2427.16 542.872)"
        onClick={handleObjectClick}
      />
      <rect
        id="RT5A"
        className={`${className} object`}
        x="2072.66"
        y="374.372"
        width="27"
        height="13"
        transform="rotate(-180 2072.66 374.372)"
        onClick={handleObjectClick}
      />
      <rect
        id="FB10"
        className={`${className} object`}
        x="1980.66"
        y="361.372"
        width="64"
        height="27"
        onClick={handleObjectClick}
      />
      <rect
        id="RT4"
        className={`${className} object`}
        x="1855.66"
        y="395.372"
        width="31"
        height="34"
        transform="rotate(-180 1855.66 395.372)"
        onClick={handleObjectClick}
      />
      <rect
        id="MS3"
        className={`${className} object`}
        x="1807.16"
        y="286.872"
        width="34.0001"
        height="47"
        transform="rotate(-180 1807.16 286.872)"
        onClick={handleObjectClick}
      />
      <rect
        id="T0B"
        className={`${className} object`}
        x="1804.16"
        y="386.872"
        width="46"
        height="36"
        transform="rotate(-180 1804.16 386.872)"
        onClick={handleObjectClick}
      />
      <rect
        id="FB11"
        className={`${className} object`}
        x="1743.66"
        y="386.372"
        width="32"
        height="35"
        transform="rotate(-180 1743.66 386.372)"
        onClick={handleObjectClick}
      />
      <rect
        id="FB12"
        className={`${className} object`}
        x="1711.66"
        y="386.372"
        width="32"
        height="35"
        transform="rotate(-180 1711.66 386.372)"
        onClick={handleObjectClick}
      />
      <rect
        id="FB13"
        className={`${className} object`}
        x="1679.66"
        y="386.372"
        width="32"
        height="35"
        transform="rotate(-180 1679.66 386.372)"
        onClick={handleObjectClick}
      />
      <rect
        id="FB14"
        className={`${className} object`}
        x="1647.66"
        y="386.372"
        width="29"
        height="35"
        transform="rotate(-180 1647.66 386.372)"
        onClick={handleObjectClick}
      />
      <rect
        id="EP6"
        className={`${className} object`}
        x="1534.16"
        y="286.872"
        width="29.877"
        height="17"
        transform="rotate(-180 1534.16 286.872)"
        onClick={handleObjectClick}
      />
      <rect
        id="SV2"
        className={`${className} object`}
        x="1479.66"
        y="386.372"
        width="20"
        height="31"
        transform="rotate(-180 1479.66 386.372)"
        onClick={handleObjectClick}
      />
      <rect
        id="RT6"
        className={`${className} object`}
        x="1458.66"
        y="386.372"
        width="43.5714"
        height="31"
        transform="rotate(-180 1458.66 386.372)"
        onClick={handleObjectClick}
      />
      <rect
        id="RT7"
        className={`${className} object`}
        x="1415.66"
        y="386.372"
        width="43.5714"
        height="31"
        transform="rotate(-180 1415.66 386.372)"
        onClick={handleObjectClick}
      />
      <rect
        id="RT8"
        className={`${className} object`}
        x="1372.66"
        y="386.372"
        width="43.5714"
        height="31"
        transform="rotate(-180 1372.66 386.372)"
        onClick={handleObjectClick}
      />
      <rect
        id="TOH"
        className={`${className} object`}
        x="1328.16"
        y="386.872"
        width="49"
        height="32"
        transform="rotate(-180 1328.16 386.872)"
        onClick={handleObjectClick}
      />
      <rect
        id="RT9"
        className={`${className} object`}
        x="1212.66"
        y="371.372"
        width="34"
        height="43"
        transform="rotate(-180 1212.66 371.372)"
        onClick={handleObjectClick}
      />
      <rect
        id="EP7"
        className={`${className} object`}
        x="1270.16"
        y="287.872"
        width="34"
        height="14"
        transform="rotate(-180 1270.16 287.872)"
        onClick={handleObjectClick}
      />
      <rect
        id="RT11"
        className={`${className} object`}
        x="1086.66"
        y="371.372"
        width="34"
        height="43"
        transform="rotate(-180 1086.66 371.372)"
        onClick={handleObjectClick}
      />
      <rect
        id="RT12"
        className={`${className} object`}
        x="974.191"
        y="371.372"
        width="83"
        height="28"
        transform="rotate(-180 974.191 371.372)"
        onClick={handleObjectClick}
      />
      <rect
        id="RT13"
        className={`${className} object`}
        x="833.191"
        y="386.372"
        width="37"
        height="43"
        transform="rotate(-180 833.191 386.372)"
        onClick={handleObjectClick}
      />
      <rect
        id="FB16"
        className={`${className} object`}
        x="795.191"
        y="386.372"
        width="49"
        height="43"
        transform="rotate(-180 795.191 386.372)"
        onClick={handleObjectClick}
      />
      <rect
        id="TOK"
        className={`${className} object`}
        x="693.691"
        y="477.872"
        width="78"
        height="88"
        transform="rotate(-180 693.691 477.872)"
        onClick={handleObjectClick}
      />
      <rect
        id="FB19"
        className={`${className} object`}
        x="568.191"
        y="396.372"
        width="71"
        height="53"
        transform="rotate(-180 568.191 396.372)"
        onClick={handleObjectClick}
      />
      <rect
        id="SV5"
        className={`${className} object`}
        x="496.191"
        y="396.372"
        width="39"
        height="53"
        transform="rotate(-180 496.191 396.372)"
        onClick={handleObjectClick}
      />
      <rect
        id="RT14"
        className={`${className} object`}
        x="286.191"
        y="283.372"
        width="29"
        height="50"
        transform="rotate(-180 286.191 283.372)"
        onClick={handleObjectClick}
      />
      <rect
        id="MOM"
        className={`${className} object`}
        x="194.691"
        y="431.872"
        width="46"
        height="88"
        transform="rotate(-180 194.691 431.872)"
        onClick={handleObjectClick}
      />
      <rect 
        id="TORED"
        className={`${className} object`}
        x="2242.16" 
        y="388.872" 
        width="46" 
        height="38" 
        transform="rotate(-180 2242.16 388.872)"
        onClick={handleObjectClick}
      />
      <rect 
        id="TORED2"
        className={`${className} object`}
        x="2766.16" 
        y="382.872" 
        width="46" 
        height="35" 
        transform="rotate(-180 2766.16 382.872)"
        onClick={handleObjectClick}
      />

      <ellipse
        id="Gate1"
        cx={48}
        cy={226}
        rx={16}
        ry={14}
        className={`${className} object`}
        onClick={handleObjectClick}
      />
      <ellipse
        id="Gate2"
        cx={372}
        cy={229}
        rx={16}
        ry={14}
        className={`${className} object`}
        onClick={handleObjectClick}
      />
      <ellipse
        id="Gate3"
        cx={426}
        cy={230}
        rx={16}
        ry={14}
        className={`${className} object`}
        onClick={handleObjectClick}
      />
      <ellipse
        id="Gate4"
        cx={697}
        cy={231}
        rx={16}
        ry={14}
        className={`${className} object`}
        onClick={handleObjectClick}
      />
      <ellipse
        id="Gate5"
        cx={973}
        cy={231}
        rx={16}
        ry={14}
        className={`${className} object`}
        onClick={handleObjectClick}
      />
      <ellipse
        id="Gate6"
        cx={1303}
        cy={231}
        rx={16}
        ry={14}
        className={`${className} object`}
        onClick={handleObjectClick}
      />
      <ellipse
        id="Gate7"
        cx={1500}
        cy={215}
        rx={16}
        ry={14}
        className={`${className} object`}
        onClick={handleObjectClick}
      />
      <ellipse
        id="Gate8"
        cx={1617}
        cy={227}
        rx={16}
        ry={14}
        className={`${className} object`}
        onClick={handleObjectClick}
      />
      <ellipse
        id="Gate9"
        cx={1834}
        cy={226}
        rx={16}
        ry={14}
        className={`${className} object`}
        onClick={handleObjectClick}
      />
      <ellipse
        id="Gate10"
        cx={2086}
        cy={226}
        rx={16}
        ry={14}
        className={`${className} object`}
        onClick={handleObjectClick}
      />
      <ellipse
        id="Gate11"
        cx={2332}
        cy={226}
        rx={16}
        ry={14}
        className={`${className} object`}
        onClick={handleObjectClick}
      />
      <ellipse
        id="Gate12"
        cx={2608}
        cy={227}
        rx={16}
        ry={14}
        className={`${className} object`}
        onClick={handleObjectClick}
      />
      <ellipse
        id="Gate13"
        cx={2815}
        cy={227}
        rx={16}
        ry={14}
        className={`${className} object`}
        onClick={handleObjectClick}
      />
      <ellipse
        id="Gate14"
        cx={2983}
        cy={227}
        rx={16}
        ry={14}
        className={`${className} object`}
        onClick={handleObjectClick}
      />
      <ellipse
        id="Gate15"
        cx={3142}
        cy={227}
        rx={16}
        ry={14}
        className={`${className} object`}
        onClick={handleObjectClick}
      />

      <path
        id="Check-in"
        cx={439.915}
        cy={276.387}
        rx={57}
        ry={57}
        className={`${className} object`}
        onClick={handleObjectClick}
      />
      <path
        id="Arrival"
        cx={201.474}
        cy={214.387}
        rx={57}
        ry={57}
        className={`${className} object`}
        onClick={handleObjectClick}

      />
    </g>
    )}
    <g id = "object1">

    </g>
    </>
  );
}

export default Objects;
