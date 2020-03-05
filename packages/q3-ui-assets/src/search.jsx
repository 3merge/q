import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import get from 'lodash.get';

export default (props) => {
  const theme = useTheme();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 734 764.5"
      {...props}
    >
      <defs>
        <linearGradient
          id="a"
          x1="366.37"
          x2="608.5"
          y1="536.32"
          y2="536.32"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            offset="0"
            stopColor="gray"
            stopOpacity="0.25"
          />
          <stop
            offset="0.54"
            stopColor="gray"
            stopOpacity="0.12"
          />
          <stop
            offset="1"
            stopColor="gray"
            stopOpacity="0.1"
          />
        </linearGradient>
        <linearGradient
          id="b"
          x1="124.23"
          x2="366.37"
          y1="536.32"
          y2="536.32"
          xlinkHref="#a"
        />
        <linearGradient
          id="c"
          x1="366.37"
          x2="734"
          y1="285.31"
          y2="285.31"
          xlinkHref="#a"
        />
        <linearGradient
          id="d"
          x1="0"
          x2="366.37"
          y1="285.31"
          y2="285.31"
          xlinkHref="#a"
        />
        <linearGradient
          id="e"
          x1="276.64"
          x2="276.64"
          y1="421.19"
          y2="255.38"
          xlinkHref="#a"
        />
        <linearGradient
          id="f"
          x1="188.97"
          x2="364.55"
          y1="337.56"
          y2="337.56"
          xlinkHref="#a"
        />
        <linearGradient
          id="g"
          x1="202.5"
          x2="232.11"
          y1="296.63"
          y2="296.63"
          xlinkHref="#a"
        />
        <linearGradient
          id="h"
          x1="240.99"
          x2="358.7"
          y1="284.79"
          y2="284.79"
          xlinkHref="#a"
        />
        <linearGradient
          id="i"
          x1="240.99"
          x2="358.7"
          y1="293.67"
          y2="293.67"
          xlinkHref="#a"
        />
        <linearGradient
          id="j"
          x1="199.54"
          x2="358.7"
          y1="325.92"
          y2="325.92"
          xlinkHref="#a"
        />
        <linearGradient
          id="k"
          x1="199.54"
          x2="358.7"
          y1="334.8"
          y2="334.8"
          xlinkHref="#a"
        />
        <linearGradient
          id="l"
          x1="199.54"
          x2="358.7"
          y1="346.64"
          y2="346.64"
          xlinkHref="#a"
        />
        <linearGradient
          id="m"
          x1="199.54"
          x2="291.33"
          y1="355.53"
          y2="355.53"
          xlinkHref="#a"
        />
        <linearGradient
          id="n"
          x1="199.54"
          x2="358.7"
          y1="367.34"
          y2="367.34"
          xlinkHref="#a"
        />
        <linearGradient
          id="o"
          x1="199.54"
          x2="358.7"
          y1="376.22"
          y2="376.22"
          xlinkHref="#a"
        />
        <linearGradient
          id="p"
          x1="199.54"
          x2="358.7"
          y1="388.07"
          y2="388.07"
          xlinkHref="#a"
        />
        <linearGradient
          id="q"
          x1="199.54"
          x2="291.33"
          y1="396.95"
          y2="396.95"
          xlinkHref="#a"
        />
        <linearGradient
          id="r"
          x1="303.76"
          x2="303.76"
          y1="459.51"
          y2="293.69"
          xlinkHref="#a"
        />
        <linearGradient
          id="s"
          x1="216.09"
          x2="391.67"
          y1="375.88"
          y2="375.88"
          xlinkHref="#a"
        />
        <linearGradient
          id="t"
          x1="229.62"
          x2="259.23"
          y1="334.95"
          y2="334.95"
          xlinkHref="#a"
        />
        <linearGradient
          id="u"
          x1="268.12"
          x2="385.83"
          y1="323.11"
          y2="323.11"
          xlinkHref="#a"
        />
        <linearGradient
          id="v"
          x1="268.12"
          x2="385.83"
          y1="331.99"
          y2="331.99"
          xlinkHref="#a"
        />
        <linearGradient
          id="w"
          x1="226.66"
          x2="385.83"
          y1="364.23"
          y2="364.23"
          xlinkHref="#a"
        />
        <linearGradient
          id="x"
          x1="226.66"
          x2="385.83"
          y1="373.12"
          y2="373.12"
          xlinkHref="#a"
        />
        <linearGradient
          id="y"
          x1="226.66"
          x2="385.83"
          y1="384.96"
          y2="384.96"
          xlinkHref="#a"
        />
        <linearGradient
          id="z"
          x1="226.66"
          x2="318.45"
          y1="393.84"
          y2="393.84"
          xlinkHref="#a"
        />
        <linearGradient
          id="A"
          x1="226.66"
          x2="385.83"
          y1="405.66"
          y2="405.66"
          xlinkHref="#a"
        />
        <linearGradient
          id="B"
          x1="226.66"
          x2="385.83"
          y1="414.54"
          y2="414.54"
          xlinkHref="#a"
        />
        <linearGradient
          id="C"
          x1="226.66"
          x2="385.83"
          y1="426.39"
          y2="426.39"
          xlinkHref="#a"
        />
        <linearGradient
          id="D"
          x1="226.66"
          x2="318.45"
          y1="435.27"
          y2="435.27"
          xlinkHref="#a"
        />
        <linearGradient
          id="E"
          x1="396.27"
          x2="396.27"
          y1="498.11"
          y2="315.15"
          xlinkHref="#a"
        />
        <linearGradient
          id="F"
          x1="323.2"
          x2="470.82"
          y1="406.08"
          y2="406.08"
          xlinkHref="#a"
        />
        <linearGradient
          id="G"
          x1="630.01"
          x2="630.01"
          y1="435.54"
          y2="409.41"
          xlinkHref="#a"
        />
        <linearGradient
          id="H"
          x1="379.34"
          x2="414.68"
          y1="356.75"
          y2="356.75"
          xlinkHref="#a"
        />
        <linearGradient
          id="I"
          x1="389.65"
          x2="404.37"
          y1="345.34"
          y2="345.34"
          xlinkHref="#a"
        />
        <linearGradient
          id="J"
          x1="345.29"
          x2="449.1"
          y1="397.51"
          y2="397.51"
          xlinkHref="#a"
        />
        <linearGradient
          id="K"
          x1="345.29"
          x2="449.1"
          y1="426.59"
          y2="426.59"
          xlinkHref="#a"
        />
        <linearGradient
          id="L"
          x1="345.29"
          x2="449.1"
          y1="434.32"
          y2="434.32"
          xlinkHref="#a"
        />
        <linearGradient
          id="M"
          x1="345.29"
          x2="389.1"
          y1="418.86"
          y2="418.86"
          xlinkHref="#a"
        />
        <linearGradient
          id="N"
          x1="416.34"
          x2="449.1"
          y1="418.86"
          y2="418.86"
          xlinkHref="#a"
        />
        <linearGradient
          id="O"
          x1="381.73"
          x2="414.5"
          y1="452.36"
          y2="452.36"
          xlinkHref="#a"
        />
        <linearGradient
          id="P"
          x1="124.23"
          x2="366.37"
          y1="565.47"
          y2="565.47"
          xlinkHref="#a"
        />
        <linearGradient
          id="Q"
          x1="366.37"
          x2="608.5"
          y1="565.47"
          y2="565.47"
          xlinkHref="#a"
        />
        <linearGradient
          id="R"
          x1="512.15"
          x2="608.5"
          y1="631.39"
          y2="631.39"
          xlinkHref="#a"
        />
        <linearGradient
          id="S"
          x1="517.49"
          x2="517.49"
          y1="407.03"
          y2="338.42"
          xlinkHref="#a"
        />
        <linearGradient
          id="T"
          x1="482.9"
          x2="552.07"
          y1="372.87"
          y2="372.87"
          xlinkHref="#a"
        />
        <linearGradient
          id="U"
          x1="750.49"
          x2="750.49"
          y1="435.86"
          y2="415.97"
          xlinkHref="#a"
        />
        <linearGradient
          id="V"
          x1="504.04"
          x2="530.93"
          y1="359.71"
          y2="359.71"
          xlinkHref="#a"
        />
        <linearGradient
          id="W"
          x1="511.89"
          x2="523.09"
          y1="351.03"
          y2="351.03"
          xlinkHref="#a"
        />
        <linearGradient
          id="X"
          x1="505.58"
          x2="530.51"
          y1="380.71"
          y2="380.71"
          xlinkHref="#a"
        />
        <linearGradient
          id="Y"
          x1="496.2"
          x2="538.77"
          y1="386.87"
          y2="386.87"
          xlinkHref="#a"
        />
        <linearGradient
          id="Z"
          x1="358.76"
          x2="358.76"
          y1="204.69"
          y2="128.69"
          xlinkHref="#a"
        />
        <linearGradient
          id="aa"
          x1="313.57"
          x2="403.76"
          y1="166.78"
          y2="166.78"
          xlinkHref="#a"
        />
        <linearGradient
          id="ab"
          x1="313.57"
          x2="403.76"
          y1="138.3"
          y2="138.3"
          xlinkHref="#a"
        />
        <linearGradient
          id="ac"
          x1="320.76"
          x2="396.57"
          y1="157.17"
          y2="157.17"
          xlinkHref="#a"
        />
        <linearGradient
          id="ad"
          x1="320.76"
          x2="376.09"
          y1="170.73"
          y2="170.73"
          xlinkHref="#a"
        />
        <linearGradient
          id="ae"
          x1="320.76"
          x2="356.69"
          y1="176.3"
          y2="176.3"
          xlinkHref="#a"
        />
        <linearGradient
          id="af"
          x1="320.76"
          x2="368.19"
          y1="181.87"
          y2="181.87"
          xlinkHref="#a"
        />
        <linearGradient
          id="ag"
          x1="320.76"
          x2="376.09"
          y1="187.44"
          y2="187.44"
          xlinkHref="#a"
        />
        <linearGradient
          id="ah"
          x1="320.76"
          x2="339.26"
          y1="193.01"
          y2="193.01"
          xlinkHref="#a"
        />
        <linearGradient
          id="ai"
          x1="505.86"
          x2="505.86"
          y1="279.95"
          y2="185.76"
          xlinkHref="#a"
        />
        <linearGradient
          id="aj"
          x1="449.86"
          x2="561.64"
          y1="232.96"
          y2="232.96"
          xlinkHref="#a"
        />
        <linearGradient
          id="ak"
          x1="449.86"
          x2="561.64"
          y1="197.67"
          y2="197.67"
          xlinkHref="#a"
        />
        <linearGradient
          id="al"
          x1="458.76"
          x2="552.73"
          y1="221.05"
          y2="221.05"
          xlinkHref="#a"
        />
        <linearGradient
          id="am"
          x1="458.76"
          x2="527.35"
          y1="237.86"
          y2="237.86"
          xlinkHref="#a"
        />
        <linearGradient
          id="an"
          x1="458.76"
          x2="503.3"
          y1="244.77"
          y2="244.77"
          xlinkHref="#a"
        />
        <linearGradient
          id="ao"
          x1="458.76"
          x2="517.55"
          y1="251.67"
          y2="251.67"
          xlinkHref="#a"
        />
        <linearGradient
          id="ap"
          x1="458.76"
          x2="527.35"
          y1="258.57"
          y2="258.57"
          xlinkHref="#a"
        />
        <linearGradient
          id="aq"
          x1="458.76"
          x2="481.7"
          y1="265.48"
          y2="265.48"
          xlinkHref="#a"
        />
        <linearGradient
          id="ar"
          x1="463.66"
          x2="490.38"
          y1="220.94"
          y2="220.94"
          xlinkHref="#a"
        />
        <linearGradient
          id="as"
          x1="121.07"
          x2="365.73"
          y1="472.93"
          y2="472.93"
          xlinkHref="#a"
        />
        <linearGradient
          id="at"
          x1="365.73"
          x2="610.4"
          y1="472.93"
          y2="472.93"
          xlinkHref="#a"
        />
        <linearGradient
          id="au"
          x1="0"
          x2="366.37"
          y1="448.21"
          y2="448.21"
          xlinkHref="#a"
        />
        <linearGradient
          id="av"
          x1="366.37"
          x2="734"
          y1="448.21"
          y2="448.21"
          xlinkHref="#a"
        />
        <linearGradient
          id="aw"
          x1="279.92"
          x2="279.92"
          y1="417.64"
          y2="253.24"
          xlinkHref="#a"
        />
        <linearGradient
          id="ax"
          x1="306.82"
          x2="306.82"
          y1="455.63"
          y2="291.23"
          xlinkHref="#a"
        />
        <linearGradient
          id="ay"
          x1="398.54"
          x2="398.54"
          y1="493.9"
          y2="312.51"
          xlinkHref="#a"
        />
        <linearGradient
          id="az"
          x1="632.27"
          x2="632.27"
          y1="432.45"
          y2="406.53"
          xlinkHref="#a"
        />
        <linearGradient
          id="aA"
          x1="518.71"
          x2="518.71"
          y1="403.6"
          y2="335.58"
          xlinkHref="#a"
        />
        <linearGradient
          id="aB"
          x1="751.71"
          x2="751.71"
          y1="432.76"
          y2="413.05"
          xlinkHref="#a"
        />
        <linearGradient
          id="aC"
          x1="450.84"
          x2="450.84"
          y1="68.02"
          y2="0"
          xlinkHref="#a"
        />
        <linearGradient
          id="aD"
          x1="683.84"
          x2="683.84"
          y1="97.18"
          y2="77.47"
          xlinkHref="#a"
        />
        <linearGradient
          id="aE"
          x1="361.34"
          x2="361.34"
          y1="202.99"
          y2="127.64"
          xlinkHref="#a"
        />
        <linearGradient
          id="aF"
          x1="507.18"
          x2="507.18"
          y1="277.61"
          y2="184.22"
          xlinkHref="#a"
        />
      </defs>
      <g opacity="0.7">
        <path
          fill="url(#a)"
          d="M608.5 366.44L366.37 308.13 366.37 764.5 608.5 701.12 608.5 366.44z"
        />
        <path
          fill="url(#a)"
          d="M608.5 366.44L366.37 308.13 366.37 764.5 608.5 701.12 608.5 366.44z"
          opacity="0.1"
        />
        <path
          fill="url(#b)"
          d="M124.23 366.44L366.37 308.13 366.37 764.5 124.23 702.38 124.23 366.44z"
        />
        <path
          fill="url(#b)"
          d="M124.23 366.44L366.37 308.13 366.37 764.5 124.23 702.38 124.23 366.44z"
          opacity="0.17"
        />
        <path
          fill="url(#c)"
          d="M366.37 308.13L491.87 204.18 734 266.3 608.5 366.44 366.37 308.13z"
        />
        <path
          fill="url(#d)"
          d="M0 267.56L124.23 366.44 366.37 308.13 243.4 204.18 0 267.56z"
        />
        <path
          fill="url(#d)"
          d="M0 267.56L124.23 366.44 366.37 308.13 243.4 204.18 0 267.56z"
          opacity="0.05"
        />
        <rect
          width="179.72"
          height="165.82"
          x="186.78"
          y="255.38"
          fill="url(#e)"
          opacity="0.5"
          rx="4.5"
          ry="4.5"
        />
        <rect
          width="175.58"
          height="161.8"
          x="188.97"
          y="256.66"
          fill="url(#f)"
          rx="4.5"
          ry="4.5"
        />
        <rect
          width="29.61"
          height="26.65"
          x="202.5"
          y="283.31"
          fill="url(#g)"
          rx="4.5"
          ry="4.5"
        />
        <rect
          width="117.71"
          height="2.96"
          x="240.99"
          y="283.31"
          fill="url(#h)"
          rx="0.8"
          ry="0.8"
        />
        <rect
          width="117.71"
          height="2.96"
          x="240.99"
          y="292.19"
          fill="url(#i)"
          rx="0.8"
          ry="0.8"
        />
        <rect
          width="159.16"
          height="2.96"
          x="199.54"
          y="324.44"
          fill="url(#j)"
          rx="0.8"
          ry="0.8"
        />
        <rect
          width="159.16"
          height="2.96"
          x="199.54"
          y="333.32"
          fill="url(#k)"
          rx="0.8"
          ry="0.8"
        />
        <rect
          width="159.16"
          height="2.96"
          x="199.54"
          y="345.16"
          fill="url(#l)"
          rx="0.8"
          ry="0.8"
        />
        <rect
          width="91.79"
          height="2.96"
          x="199.54"
          y="354.05"
          fill="url(#m)"
          rx="0.8"
          ry="0.8"
        />
        <rect
          width="159.16"
          height="2.96"
          x="199.54"
          y="365.86"
          fill="url(#n)"
          rx="0.8"
          ry="0.8"
        />
        <rect
          width="159.16"
          height="2.96"
          x="199.54"
          y="374.74"
          fill="url(#o)"
          rx="0.8"
          ry="0.8"
        />
        <rect
          width="159.16"
          height="2.96"
          x="199.54"
          y="386.59"
          fill="url(#p)"
          rx="0.8"
          ry="0.8"
        />
        <rect
          width="91.79"
          height="2.96"
          x="199.54"
          y="395.47"
          fill="url(#q)"
          rx="0.8"
          ry="0.8"
        />
        <rect
          width="179.72"
          height="165.82"
          x="213.9"
          y="293.69"
          fill="url(#r)"
          opacity="0.5"
          rx="4.5"
          ry="4.5"
        />
        <rect
          width="175.58"
          height="161.8"
          x="216.09"
          y="294.98"
          fill="url(#s)"
          rx="4.5"
          ry="4.5"
        />
        <rect
          width="29.61"
          height="26.65"
          x="229.62"
          y="321.63"
          fill="url(#t)"
          rx="4.5"
          ry="4.5"
        />
        <rect
          width="117.71"
          height="2.96"
          x="268.12"
          y="321.63"
          fill="url(#u)"
          rx="0.8"
          ry="0.8"
        />
        <rect
          width="117.71"
          height="2.96"
          x="268.12"
          y="330.51"
          fill="url(#v)"
          rx="0.8"
          ry="0.8"
        />
        <rect
          width="159.16"
          height="2.96"
          x="226.66"
          y="362.75"
          fill="url(#w)"
          rx="0.8"
          ry="0.8"
        />
        <rect
          width="159.16"
          height="2.96"
          x="226.66"
          y="371.64"
          fill="url(#x)"
          rx="0.8"
          ry="0.8"
        />
        <rect
          width="159.16"
          height="2.96"
          x="226.66"
          y="383.48"
          fill="url(#y)"
          rx="0.8"
          ry="0.8"
        />
        <rect
          width="91.79"
          height="2.96"
          x="226.66"
          y="392.36"
          fill="url(#z)"
          rx="0.8"
          ry="0.8"
        />
        <rect
          width="159.16"
          height="2.96"
          x="226.66"
          y="404.18"
          fill="url(#A)"
          rx="0.8"
          ry="0.8"
        />
        <rect
          width="159.16"
          height="2.96"
          x="226.66"
          y="413.06"
          fill="url(#B)"
          rx="0.8"
          ry="0.8"
        />
        <rect
          width="159.16"
          height="2.96"
          x="226.66"
          y="424.91"
          fill="url(#C)"
          rx="0.8"
          ry="0.8"
        />
        <rect
          width="91.79"
          height="2.96"
          x="226.66"
          y="433.79"
          fill="url(#D)"
          rx="0.8"
          ry="0.8"
        />
        <path
          fill="url(#E)"
          d="M318.41 315.15H474.13V498.11H318.41z"
          opacity="0.5"
        />
        <path
          fill="url(#F)"
          d="M323.2 318.1H470.82V494.07000000000005H323.2z"
        />
        <path
          fill="url(#G)"
          d="M638.05 413.83v-4.42H622v4.42h-11.29v21.71h38.6v-21.71zM624 411h12v2.81h-12z"
          opacity="0.5"
          transform="translate(-233 -67.75)"
        />
        <path
          fill="url(#H)"
          d="M379.34 346.81H414.67999999999995V366.69H379.34z"
        />
        <path
          fill="url(#I)"
          d="M389.65 342.76L389.65 347.92 391.49 347.92 391.49 344.24 402.53 344.24 402.53 347.92 404.37 347.92 404.37 342.76 389.65 342.76z"
        />
        <path
          fill="url(#J)"
          d="M345.29 395.3H449.1V399.72H345.29z"
        />
        <path
          fill="url(#K)"
          d="M345.29 424.38H449.1V428.8H345.29z"
        />
        <path
          fill="url(#L)"
          d="M345.29 432.11H449.1V436.53000000000003H345.29z"
        />
        <path
          fill="url(#M)"
          d="M345.29 416.65H389.1V421.07H345.29z"
        />
        <path
          fill="url(#N)"
          d="M416.34 416.65H449.09999999999997V421.07H416.34z"
          opacity="0.6"
        />
        <path
          fill="url(#O)"
          d="M381.73 450.15H414.49V454.57H381.73z"
        />
        <path
          fill="url(#P)"
          d="M124.23 366.44L124.23 702.38 366.37 764.5 366.37 431.1 124.23 366.44z"
        />
        <path
          fill="url(#Q)"
          d="M608.5 701.12L366.37 764.5 366.37 431.1 608.5 366.44 608.5 701.12z"
        />
        <path
          fill="url(#Q)"
          d="M608.5 701.12L366.37 764.5 366.37 431.1 608.5 366.44 608.5 701.12z"
          opacity="0.07"
        />
        <path
          fill="url(#R)"
          d="M512.15 589.56L512.15 699.85 608.5 673.23 608.5 562.94 512.15 589.56z"
          opacity="0.07"
        />
        <path
          fill="url(#S)"
          d="M481.78 338.42H553.1899999999999V407.03000000000003H481.78z"
        />
        <path
          fill="url(#T)"
          d="M482.9 340.1H552.0699999999999V405.63H482.9z"
        />
        <path
          fill="url(#U)"
          d="M756.6 419.34V416h-12.23v3.36h-8.57v16.52h29.37v-16.54zm-10.7-2.14h9.18v2.14h-9.18z"
          opacity="0.5"
          transform="translate(-233 -67.75)"
        />
        <path
          fill="url(#V)"
          d="M504.04 352.15H530.9200000000001V367.27H504.04z"
          opacity="0.6"
        />
        <path
          fill="url(#W)"
          d="M511.88 349.06L511.88 352.99 513.29 352.99 513.29 350.19 521.69 350.19 521.69 352.99 523.09 352.99 523.09 349.06 511.88 349.06z"
          opacity="0.6"
        />
        <path
          fill="url(#X)"
          d="M505.58 379.03H530.5V382.39H505.58z"
          opacity="0.6"
        />
        <path
          fill="url(#Y)"
          d="M496.2 385.19H538.77V388.55H496.2z"
        />
        <path
          fill="url(#Z)"
          d="M312.49 128.69H405.01V204.69H312.49z"
          opacity="0.5"
        />
        <path
          fill="url(#aa)"
          d="M313.57 130.13H403.76V203.43H313.57z"
        />
        <path
          fill="url(#ab)"
          d="M313.57 130.13H403.76V146.48H313.57z"
        />
        <path
          fill="url(#ab)"
          d="M313.57 130.13H403.76V146.48H313.57z"
          opacity="0.1"
        />
        <path
          fill="url(#ac)"
          d="M320.76 152.41H396.58V161.93H320.76z"
        />
        <path
          fill="url(#ad)"
          d="M320.76 169.12H376.1V172.35H320.76z"
        />
        <path
          fill="url(#ae)"
          d="M320.76 174.69H356.69V177.92H320.76z"
        />
        <path
          fill="url(#af)"
          d="M320.76 180.26H368.19V183.48999999999998H320.76z"
        />
        <path
          fill="url(#ag)"
          d="M320.76 185.82H376.1V189.04999999999998H320.76z"
        />
        <path
          fill="url(#ah)"
          d="M320.76 191.39H339.26V194.61999999999998H320.76z"
        />
        <path
          fill="url(#ai)"
          d="M448.52 185.76H563.2V279.95H448.52z"
          opacity="0.5"
        />
        <path
          fill="url(#aj)"
          d="M449.86 187.54H561.65V278.39H449.86z"
        />
        <path
          fill="url(#ak)"
          d="M449.86 187.54H561.65V207.79999999999998H449.86z"
        />
        <path
          fill="url(#al)"
          d="M458.76 215.15H552.73V226.95000000000002H458.76z"
        />
        <path
          fill="url(#am)"
          d="M458.76 235.86H527.35V239.87H458.76z"
        />
        <path
          fill="url(#an)"
          d="M458.76 242.76H503.3V246.76999999999998H458.76z"
        />
        <path
          fill="url(#ao)"
          d="M458.76 249.67H517.55V253.67999999999998H458.76z"
        />
        <path
          fill="url(#ap)"
          d="M458.76 256.57H527.35V260.58H458.76z"
        />
        <path
          fill="url(#aq)"
          d="M458.76 263.47H481.7V267.48H458.76z"
        />
        <path
          fill="url(#ar)"
          d="M463.66 219.16H490.38V222.72H463.66z"
        />
        <path
          fill="url(#as)"
          d="M121.07 540.75L256.71 574.98 365.73 486.24 365.73 431.73 123.6 370.88 121.07 540.75z"
          opacity="0.1"
        />
        <path
          fill="url(#at)"
          d="M610.4 540.75L474.75 574.98 365.73 486.24 365.73 431.73 607.86 370.88 610.4 540.75z"
          opacity="0.1"
        />
        <path
          fill="url(#au)"
          d="M124.23 366.44L0 469.13 242.13 529.98 366.37 431.1 124.23 366.44z"
        />
        <path
          fill="url(#av)"
          d="M608.5 366.44L734 469.13 493.14 529.98 366.37 431.1 608.5 366.44z"
        />
        <path
          fill="url(#av)"
          d="M608.5 366.44L734 469.13 493.14 529.98 366.37 431.1 608.5 366.44z"
          opacity="0.07"
        />
      </g>
      <path
        fill="#535461"
        d="M608.94 363.36L368.88 305.54 368.88 758.01 608.94 695.17 608.94 363.36z"
      />
      <path
        d="M608.94 363.36L368.88 305.54 368.88 758.01 608.94 695.17 608.94 363.36z"
        opacity="0.1"
      />
      <path
        fill="#535461"
        d="M128.83 363.36L368.88 305.54 368.88 758.01 128.83 696.42 128.83 363.36z"
      />
      <path
        d="M128.83 361.36L368.88 303.54 368.88 758.01 128.83 696.42 128.83 361.36z"
        opacity="0.17"
      />
      <path
        fill="#535461"
        d="M366.88 307.54L493.31 202.48 733.37 264.07 606.94 365.36 366.88 307.54z"
      />
      <path
        fill="#535461"
        d="M7.66 267.32L130.83 365.36 370.88 307.54 248.97 204.48 7.66 267.32z"
      />
      <path
        d="M5.66 265.32L131.83 365.36 371.88 307.54 246.97 202.48 5.66 265.32z"
        opacity="0.05"
      />
      <rect
        width="178.18"
        height="164.4"
        x="190.83"
        y="253.24"
        fill="url(#aw)"
        opacity="0.5"
        rx="4.5"
        ry="4.5"
      />
      <rect
        width="174.07"
        height="160.41"
        x="193.01"
        y="254.52"
        fill="#f5f5f5"
        rx="4.5"
        ry="4.5"
      />
      <rect
        width="29.36"
        height="26.42"
        x="206.42"
        y="280.94"
        fill={get(theme, 'palette.primary.light')}
        rx="4.5"
        ry="4.5"
      />
      <rect
        width="116.7"
        height="2.94"
        x="244.59"
        y="280.94"
        fill="#e0e0e0"
        rx="0.8"
        ry="0.8"
      />
      <rect
        width="116.7"
        height="2.94"
        x="244.59"
        y="289.74"
        fill="#e0e0e0"
        rx="0.8"
        ry="0.8"
      />
      <rect
        width="157.8"
        height="2.94"
        x="203.49"
        y="321.71"
        fill="#e0e0e0"
        rx="0.8"
        ry="0.8"
      />
      <rect
        width="157.8"
        height="2.94"
        x="203.49"
        y="330.52"
        fill="#e0e0e0"
        rx="0.8"
        ry="0.8"
      />
      <rect
        width="157.8"
        height="2.94"
        x="203.49"
        y="342.26"
        fill="#e0e0e0"
        rx="0.8"
        ry="0.8"
      />
      <rect
        width="91.01"
        height="2.94"
        x="203.49"
        y="351.07"
        fill="#e0e0e0"
        rx="0.8"
        ry="0.8"
      />
      <rect
        width="157.8"
        height="2.94"
        x="203.49"
        y="362.78"
        fill="#e0e0e0"
        rx="0.8"
        ry="0.8"
      />
      <rect
        width="157.8"
        height="2.94"
        x="203.49"
        y="371.59"
        fill="#e0e0e0"
        rx="0.8"
        ry="0.8"
      />
      <rect
        width="157.8"
        height="2.94"
        x="203.49"
        y="383.33"
        fill="#e0e0e0"
        rx="0.8"
        ry="0.8"
      />
      <rect
        width="91.01"
        height="2.94"
        x="203.49"
        y="392.14"
        fill="#e0e0e0"
        rx="0.8"
        ry="0.8"
      />
      <rect
        width="178.18"
        height="164.4"
        x="217.72"
        y="291.23"
        fill="url(#ax)"
        opacity="0.5"
        rx="4.5"
        ry="4.5"
      />
      <rect
        width="174.07"
        height="160.41"
        x="219.9"
        y="292.51"
        fill="#fff"
        rx="4.5"
        ry="4.5"
      />
      <rect
        width="29.36"
        height="26.42"
        x="233.31"
        y="318.93"
        fill={get(theme, 'palette.primary.light')}
        rx="4.5"
        ry="4.5"
      />
      <rect
        width="116.7"
        height="2.94"
        x="271.48"
        y="318.93"
        fill="#e0e0e0"
        rx="0.8"
        ry="0.8"
      />
      <rect
        width="116.7"
        height="2.94"
        x="271.48"
        y="327.73"
        fill="#e0e0e0"
        rx="0.8"
        ry="0.8"
      />
      <rect
        width="157.8"
        height="2.94"
        x="230.38"
        y="359.7"
        fill="#e0e0e0"
        rx="0.8"
        ry="0.8"
      />
      <rect
        width="157.8"
        height="2.94"
        x="230.38"
        y="368.51"
        fill="#e0e0e0"
        rx="0.8"
        ry="0.8"
      />
      <rect
        width="157.8"
        height="2.94"
        x="230.38"
        y="380.25"
        fill="#e0e0e0"
        rx="0.8"
        ry="0.8"
      />
      <rect
        width="91.01"
        height="2.94"
        x="230.38"
        y="389.06"
        fill="#e0e0e0"
        rx="0.8"
        ry="0.8"
      />
      <rect
        width="157.8"
        height="2.94"
        x="230.38"
        y="400.77"
        fill="#e0e0e0"
        rx="0.8"
        ry="0.8"
      />
      <rect
        width="157.8"
        height="2.94"
        x="230.38"
        y="409.58"
        fill="#e0e0e0"
        rx="0.8"
        ry="0.8"
      />
      <rect
        width="157.8"
        height="2.94"
        x="230.38"
        y="421.32"
        fill="#e0e0e0"
        rx="0.8"
        ry="0.8"
      />
      <rect
        width="91.01"
        height="2.94"
        x="230.38"
        y="430.13"
        fill="#e0e0e0"
        rx="0.8"
        ry="0.8"
      />
      <path
        fill="url(#ay)"
        d="M321.34 312.51H475.72999999999996V493.9H321.34z"
        opacity="0.5"
      />
      <path
        fill="#fff"
        d="M326.09 315.43H472.45V489.89H326.09z"
      />
      <path
        fill="url(#az)"
        d="M640.24 410.92v-4.39h-15.95v4.39h-11.16v21.53h38.27v-21.53zm-14-2.79h12v2.79h-12z"
        opacity="0.5"
        transform="translate(-233 -67.75)"
      />
      <path
        fill={get(theme, 'palette.primary.light')}
        d="M381.75 343.9H416.79V363.60999999999996H381.75z"
      />
      <path
        fill={get(theme, 'palette.primary.light')}
        d="M391.97 339.88L391.97 344.99 393.79 344.99 393.79 341.34 404.74 341.34 404.74 344.99 406.57 344.99 406.57 339.88 391.97 339.88z"
      />
      <path
        fill="#e0e0e0"
        d="M347.99 391.97H450.91V396.35H347.99z"
      />
      <path
        fill="#e0e0e0"
        d="M347.99 420.8H450.91V425.18H347.99z"
      />
      <path
        fill="#e0e0e0"
        d="M347.99 428.47H450.91V432.85H347.99z"
      />
      <path
        fill="#e0e0e0"
        d="M347.99 413.14H391.42V417.52H347.99z"
      />
      <path
        fill="#3ad29f"
        d="M418.43 413.14H450.91V417.52H418.43z"
        opacity="0.6"
      />
      <path
        fill={get(theme, 'palette.primary.light')}
        d="M384.12 446.35H416.6V450.73H384.12z"
      />
      <path
        fill="#535461"
        d="M128.83 363.36L128.83 696.42 368.88 758.01 372.12 427.46 128.83 363.36z"
      />
      <path
        fill="#535461"
        d="M608.94 695.17L368.88 758.01 368.88 427.46 608.94 363.36 608.94 695.17z"
      />
      <path
        d="M608.94 695.17L368.88 758.01 368.88 427.46 608.94 363.36 608.94 695.17z"
        opacity="0.07"
      />
      <path
        d="M513.42 584.57L513.42 693.91 608.94 667.52 608.94 558.17 513.42 584.57z"
        opacity="0.07"
      />
      <path
        fill="url(#aA)"
        d="M483.31 335.58H554.11V403.59999999999997H483.31z"
      />
      <path
        fill="#f5f5f5"
        d="M484.42 337.24H553V402.21000000000004H484.42z"
      />
      <path
        fill="url(#aB)"
        d="M757.78 416.38V413h-12.13v3.34h-8.49v16.38h29.11v-16.34zm-10.61-2.12h9.1v2.12h-9.1z"
        opacity="0.5"
        transform="translate(-233 -67.75)"
      />
      <path
        fill={get(theme, 'palette.primary.light')}
        d="M505.38 349.18H532.03V364.17H505.38z"
        opacity="0.6"
      />
      <path
        fill={get(theme, 'palette.primary.light')}
        d="M513.16 346.13L513.16 350.02 514.55 350.02 514.55 347.24 522.88 347.24 522.88 350.02 524.26 350.02 524.26 346.13 513.16 346.13z"
        opacity="0.6"
      />
      <path
        fill={get(theme, 'palette.primary.light')}
        d="M506.91 375.84H531.62V379.16999999999996H506.91z"
        opacity="0.6"
      />
      <path
        fill="#bdbdbd"
        d="M497.61 381.95H539.8100000000001V385.28H497.61z"
      />
      <path
        fill="url(#aC)"
        d="M415.44 0H486.24V68.02H415.44z"
      />
      <path
        fill="#f5f5f5"
        d="M416.55 1.67H485.13V66.64H416.55z"
      />
      <path
        fill="url(#aD)"
        d="M689.91 80.8v-3.33h-12.13v3.33h-8.49v16.38h29.11V80.8zm-10.61-2.12h9.1v2.12h-9.1z"
        opacity="0.5"
        transform="translate(-233 -67.75)"
      />
      <path
        fill={get(theme, 'palette.primary.light')}
        d="M437.51 13.6H464.15999999999997V28.59H437.51z"
        opacity="0.6"
      />
      <path
        fill={get(theme, 'palette.primary.light')}
        d="M445.29 10.55L445.29 14.44 446.68 14.44 446.68 11.66 455.01 11.66 455.01 14.44 456.39 14.44 456.39 10.55 445.29 10.55z"
        opacity="0.6"
      />
      <path
        fill={get(theme, 'palette.primary.light')}
        d="M439.04 40.26H463.75V43.589999999999996H439.04z"
        opacity="0.6"
      />
      <path
        fill="#bdbdbd"
        d="M429.74 46.37H471.94V49.699999999999996H429.74z"
      />
      <path
        fill="url(#aE)"
        d="M315.47 127.64H407.20000000000005V202.99H315.47z"
        opacity="0.5"
      />
      <path
        fill="#f2f2f2"
        d="M316.54 129.07H405.96000000000004V201.74H316.54z"
      />
      <path
        fill={get(theme, 'palette.primary.light')}
        d="M316.54 129.07H405.96000000000004V145.28H316.54z"
      />
      <path
        d="M316.54 129.07H405.96000000000004V145.28H316.54z"
        opacity="0.1"
      />
      <path
        fill="#e0e0e0"
        d="M323.67 151.16H398.84000000000003V160.6H323.67z"
      />
      <path
        fill="#e0e0e0"
        d="M323.67 167.72H378.53000000000003V170.93H323.67z"
      />
      <path
        fill="#e0e0e0"
        d="M323.67 173.24H359.29V176.45000000000002H323.67z"
      />
      <path
        fill="#e0e0e0"
        d="M323.67 178.76H370.69V181.97H323.67z"
      />
      <path
        fill="#e0e0e0"
        d="M323.67 184.29H378.53000000000003V187.5H323.67z"
      />
      <path
        fill="#e0e0e0"
        d="M323.67 189.81H342.02000000000004V193.02H323.67z"
      />
      <path
        fill="url(#aF)"
        d="M450.33 184.22H564.03V277.61H450.33z"
        opacity="0.5"
      />
      <path
        fill="#fff"
        d="M451.66 185.98H562.49V276.06H451.66z"
      />
      <path
        fill={get(theme, 'palette.primary.light')}
        d="M451.66 185.98H562.49V206.07H451.66z"
      />
      <path
        fill="#f5f5f5"
        d="M460.49 213.36H553.66V225.06H460.49z"
      />
      <path
        fill="#e0e0e0"
        d="M460.49 233.89H528.49V237.85999999999999H460.49z"
      />
      <path
        fill="#e0e0e0"
        d="M460.49 240.74H504.65V244.71H460.49z"
      />
      <path
        fill="#e0e0e0"
        d="M460.49 247.58H518.77V251.55H460.49z"
      />
      <path
        fill="#e0e0e0"
        d="M460.49 254.43H528.49V258.40000000000003H460.49z"
      />
      <path
        fill="#e0e0e0"
        d="M460.49 261.27H483.23V265.24H460.49z"
      />
      <path
        fill="#69f0ae"
        d="M465.35 217.33H491.84000000000003V220.86H465.35z"
      />
      <path
        d="M125.69 536.18L260.17 570.11 368.26 482.13 368.26 428.09 128.2 367.76 125.69 536.18z"
        opacity="0.1"
      />
      <path
        d="M610.83 536.18L476.35 570.11 368.26 482.13 368.26 428.09 608.32 367.76 610.83 536.18z"
        opacity="0.1"
      />
      <path
        fill="#535461"
        d="M128.83 363.36L5.66 465.16 245.71 525.49 368.88 427.46 128.83 363.36z"
      />
      <path
        fill="#535461"
        d="M608.94 363.36L733.37 465.16 494.57 525.49 368.88 427.46 608.94 363.36z"
      />
      <path
        d="M608.94 363.36L733.37 465.16 494.57 525.49 368.88 427.46 608.94 363.36z"
        opacity="0.07"
      />
    </svg>
  );
};
