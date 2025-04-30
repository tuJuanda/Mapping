interface ObjectsProps {
  handleObjectClick: (e: React.MouseEvent<SVGPathElement>) => void;
  className?: string;
  selectedFloor: number; // 👈 Tambahkan ini
}

function Objects({ handleObjectClick, className, selectedFloor }: ObjectsProps) {
  return (
    <>
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
