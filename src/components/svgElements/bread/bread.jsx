import React from 'react'
import styles from './styles.module.scss'

export default function Bread({size}) {
  return (
    <div className={styles.bread}>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width={`${size}px`}
        height={`${size}px`}
        viewBox="0 0 400.000000 406.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,406.000000) scale(0.100000,-0.100000)"
          fill="#08173F"
          stroke="none"
        >
          <path
            d="M1310 3688 c0 -6 20 -46 44 -88 74 -127 73 -135 -27 -237 -70 -72
-63 -87 22 -53 108 42 159 23 246 -90 44 -58 75 -76 75 -45 0 8 -11 44 -25 81
-42 110 -34 154 47 262 52 69 42 84 -37 54 -102 -39 -152 -26 -249 68 -59 56
-96 75 -96 48z m125 -118 c11 -18 83 -50 117 -52 18 -1 50 1 71 5 l38 8 -31
-42 c-48 -67 -57 -115 -33 -194 4 -15 -3 -12 -32 14 -54 47 -100 64 -149 56
l-40 -6 21 23 c46 51 56 108 28 162 -8 15 -15 30 -15 32 0 8 19 4 25 -6z"
          />
          <path
            d="M1570 2854 c0 -9 48 -102 65 -127 28 -40 19 -72 -41 -137 -31 -33
-54 -63 -51 -66 2 -3 35 5 71 18 l66 23 37 -20 c21 -11 55 -43 78 -72 39 -50
65 -66 65 -40 0 7 -9 41 -21 75 -26 79 -21 112 31 185 22 30 40 61 40 67 0 13
-7 12 -80 -15 -62 -23 -104 -9 -179 60 -53 49 -81 66 -81 49z m225 -142 l54 5
-27 -46 c-19 -33 -26 -59 -26 -97 l0 -51 -39 31 c-30 24 -49 31 -82 31 l-43 0
19 27 c29 40 33 80 14 117 l-16 33 46 -27 c39 -23 54 -27 100 -23z"
          />
          <path
            d="M2214 2636 c-44 -44 -45 -82 -5 -125 38 -40 79 -41 120 -3 43 39 45
84 5 131 -36 43 -75 42 -120 -3z m106 -16 c56 -56 -21 -149 -83 -99 -20 15
-27 30 -27 54 0 58 69 86 110 45z"
          />
          <path
            d="M720 2559 c-25 -11 -55 -30 -67 -41 -19 -18 -29 -19 -77 -14 -109 14
-193 -35 -218 -128 -11 -41 -19 -50 -64 -76 -94 -53 -114 -108 -78 -211 l17
-45 -36 -47 c-79 -103 -56 -206 59 -273 46 -27 64 -50 64 -82 0 -10 14 -47 31
-81 35 -69 104 -129 180 -156 60 -22 154 -22 218 0 l53 17 40 -41 c89 -89 200
-82 301 20 43 42 69 60 95 65 54 10 126 48 155 83 44 53 61 112 54 195 -5 70
-4 75 20 98 31 28 62 93 63 129 1 89 -80 211 -160 243 -22 9 -40 17 -40 19 0
2 -5 30 -11 63 -22 122 -92 179 -215 172 -63 -3 -64 -2 -106 39 -24 23 -60 49
-80 58 -53 21 -143 19 -198 -6z m180 -40 c25 -11 64 -38 87 -61 l41 -41 65 7
c113 12 165 -31 182 -149 8 -59 24 -79 86 -111 56 -28 95 -72 109 -122 22 -81
8 -134 -50 -185 -29 -26 -31 -32 -24 -65 34 -146 -32 -257 -166 -282 -48 -9
-61 -17 -110 -70 -34 -36 -66 -61 -85 -65 -16 -4 -36 -9 -44 -11 -33 -10 -89
17 -133 66 l-45 50 -47 -21 c-179 -79 -372 20 -410 209 -11 54 -14 58 -66 87
-59 33 -100 83 -100 122 0 32 25 80 67 126 l33 38 -25 43 c-48 81 -26 146 63
189 50 24 58 35 67 88 12 79 95 122 191 99 49 -12 52 -12 77 14 64 64 157 81
237 45z"
          />
          <path
            d="M650 2388 c0 -7 16 -29 36 -49 l35 -36 -115 -33 -115 -32 -34 21
c-56 35 -78 20 -37 -24 l20 -22 -39 -18 c-38 -16 -58 -41 -46 -53 3 -4 27 2
53 12 26 10 54 20 62 22 10 3 30 -17 57 -58 45 -67 90 -155 82 -161 -2 -3 -55
-21 -116 -41 -118 -39 -171 -69 -142 -81 8 -3 69 12 135 35 65 22 127 40 136
40 17 0 47 -76 62 -160 l6 -35 -106 -29 c-96 -26 -129 -45 -110 -63 3 -3 51 6
106 21 56 14 105 24 110 21 6 -4 10 -16 10 -28 0 -12 5 -29 10 -37 14 -22 35
3 35 43 0 29 3 32 40 39 22 4 74 7 116 7 l77 1 13 -57 c9 -39 19 -58 29 -58
12 0 15 12 14 53 -2 60 -1 61 87 36 43 -12 60 -22 68 -42 9 -19 15 -22 23 -14
7 7 22 12 34 12 38 0 39 21 4 50 -29 23 -34 35 -46 111 -18 114 -19 109 22
109 28 0 35 4 32 17 -2 9 -17 21 -35 27 -18 6 -37 16 -43 22 -9 9 -89 227 -90
246 0 3 21 0 47 -8 31 -10 50 -11 57 -4 15 15 -6 31 -76 60 -54 22 -65 31 -89
75 -15 27 -32 51 -38 53 -19 6 -23 -25 -6 -57 l16 -32 -93 6 c-128 8 -128 9
-180 60 -45 44 -78 58 -78 33z m341 -149 c31 -8 40 -17 57 -57 32 -74 74 -204
68 -209 -3 -3 -38 -2 -78 3 l-73 9 -67 125 c-37 69 -67 131 -68 139 0 11 13
12 63 7 34 -4 78 -11 98 -17z m-204 -31 c15 -24 46 -81 70 -128 l42 -85 -37
-6 c-20 -4 -73 -10 -117 -14 l-80 -6 -69 116 c-38 63 -66 118 -63 122 11 10
150 41 189 42 34 1 41 -4 65 -41z m160 -367 c13 -51 22 -95 20 -97 -7 -8 -222
-22 -228 -16 -13 16 -51 184 -43 192 12 12 66 17 153 16 l75 -1 23 -94z m159
74 c30 -13 33 -17 49 -109 10 -53 15 -99 12 -102 -4 -4 -137 25 -146 32 -2 2
-12 40 -22 86 -11 46 -22 91 -25 101 -5 16 -1 17 48 11 29 -4 67 -12 84 -19z"
          />
          <path
            d="M2446 2144 c-315 -57 -604 -244 -773 -502 -181 -275 -216 -566 -94
-777 89 -155 338 -341 586 -438 50 -20 178 -59 285 -87 107 -28 224 -60 259
-71 153 -46 383 -63 488 -35 116 31 207 93 297 202 130 158 199 360 213 624
21 411 -154 724 -528 945 -231 137 -482 184 -733 139z m409 -53 c286 -70 579
-286 703 -520 197 -370 107 -960 -183 -1194 -79 -63 -215 -127 -215 -100 0 5
34 50 75 101 75 94 91 124 80 142 -12 19 -23 10 -64 -54 -23 -35 -70 -91 -105
-124 -80 -77 -116 -88 -217 -67 -39 8 -74 16 -76 19 -2 2 18 11 46 21 62 20
162 84 219 138 131 126 212 311 243 553 27 215 -14 404 -123 571 -103 158
-336 357 -482 412 -209 78 -449 31 -669 -132 -167 -123 -329 -374 -392 -607
-57 -216 -14 -342 164 -476 225 -169 439 -236 756 -238 154 -1 162 0 218 26
108 51 174 119 237 246 62 125 81 315 45 452 -47 182 -213 368 -370 416 -64
19 -198 18 -266 -2 -193 -57 -355 -235 -390 -429 -39 -216 108 -387 336 -389
71 -1 86 2 134 29 58 32 122 103 152 170 49 106 -3 255 -90 257 -47 1 -76 -33
-107 -125 -34 -101 -61 -132 -112 -123 -21 3 -48 18 -65 35 -40 39 -39 88 1
174 37 81 95 144 164 183 45 25 64 29 128 29 62 0 85 -5 132 -28 141 -69 202
-225 163 -418 -33 -167 -105 -274 -209 -314 -62 -24 -202 -16 -341 20 -193 48
-419 185 -479 288 -53 90 -42 187 41 355 54 110 165 236 258 291 127 77 310
119 437 101 220 -31 370 -145 480 -364 55 -110 78 -206 78 -333 0 -259 -97
-444 -296 -561 -212 -126 -441 -154 -646 -79 -291 107 -533 277 -629 442 -53
91 -72 173 -67 288 11 222 152 497 334 653 175 150 399 253 619 284 87 13 258
3 350 -19z m-180 -125 c125 -33 258 -119 390 -251 107 -107 175 -211 219 -333
30 -85 31 -91 30 -257 -1 -151 -4 -181 -27 -269 -32 -119 -72 -207 -132 -292
-105 -146 -304 -255 -444 -241 -63 6 -135 32 -111 40 8 3 67 22 130 42 161 52
222 86 310 175 86 86 141 174 173 275 29 94 31 314 3 420 -56 214 -199 407
-361 485 -265 129 -572 74 -802 -143 -156 -147 -253 -376 -223 -523 24 -114
131 -219 315 -310 164 -80 278 -108 445 -109 131 0 136 1 189 30 110 61 177
185 200 373 19 149 -19 272 -109 356 -153 144 -347 134 -493 -24 -63 -68 -104
-144 -113 -212 -13 -92 58 -179 146 -180 72 -1 115 49 163 189 26 76 67 80
101 9 22 -47 20 -92 -8 -151 -51 -111 -132 -165 -245 -165 -120 0 -249 87
-279 188 -50 166 57 385 241 496 61 36 167 66 234 66 195 0 405 -189 458 -411
44 -190 -13 -415 -141 -549 -104 -109 -187 -131 -422 -111 -232 20 -416 83
-586 201 -192 132 -241 242 -193 430 56 215 152 387 301 536 87 86 115 107
196 148 53 26 127 56 165 66 83 22 210 25 280 6z"
          />
          <path
            d="M3486 1165 c1 -69 4 -129 8 -132 24 -24 44 102 32 201 -6 44 -11 56
-25 56 -15 0 -17 -13 -15 -125z"
          />
          <path
            d="M3455 918 c-2 -7 -9 -33 -15 -58 -13 -50 -64 -155 -80 -165 -18 -11
-12 -47 7 -43 38 7 123 193 123 270 0 13 -30 9 -35 -4z"
          />
        </g>
      </svg>
    </div>
  );
}
