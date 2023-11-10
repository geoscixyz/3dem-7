+++
title = "Program"
template = "program.html"

[extra]
pdf = "3DEM-7-program.pdf"
proceedings = "3DEM-7-proceedings.pdf"

# Sunday
[[extra.events]]
title = "Informal gathering at Browns Crafthouse UBC"
day = "2023-11-12"
from = "18:00"
to = "20:00"
content = "101 - 6111 University Blvd"


# Monday
[[extra.events]]
title = "Registration"
day = "2023-11-13"
from = "08:30"
to = "09:00"

[[extra.events]]
title = "Welcome and Introductory Remarks"
day = "2023-11-13"
from = "09:00"
to = "09:30"
content = "_by Lindsey Heagy and David Alumbaugh_"

[[extra.events]]
title = "Forward Modelling (part 1)"
day = "2023-11-13"
from = "09:30"
to = "10:30"
chair = "Dikun Yang"
talks = [
    {title="FEMALY: A Finite Element MAtlab LibrarY for Electromagnetics", authors="Klaus Spitzer, Jan Blechta, Jana Börner, Ralph-Uwe Börner, Michael Eiermann, Oliver Ernst, and Mathias Scheunert"},
    {title="An adaptive finite element solver for three-dimensional electromagnetic inductions", authors="Jianbo Long"}
]

[[extra.events]]
title = "Coffee Break"
day = "2023-11-13"
from = "10:30"
to = "11:00"

[[extra.events]]
title = "Forward Modelling (part 2)"
day = "2023-11-13"
from = "11:00"
to = "12:00"
chair = "Evan Um"
talks = [
    {title="On the Robustness, Efficiency and Scalability of an Iterative Framework in Combination With the Block-Based PREconditioner For Square Blocks PRESB Applied To Controlled-Source Electromagnetic Modelling", authors="Michael Weiss, Thomas Kalscheuer, and Maya Neytcheva"},
    {title="Rapid 3D finite-difference modelling for magnetotellurics based on Reduced Basis Method", authors="Hao Dong and Yijie Cui"},
]

[[extra.events]]
title = "Lunch"
day = "2023-11-13"
from = "12:00"
to = "13:30"

[[extra.events]]
title = "Data: Physics & Theory"
day = "2023-11-13"
from = "13:30"
to = "15:00"
chair = "Klaus Spitzer"
talks = [
    {title="Understanding problems in old MT data using modern methods", authors="Alan G. Jones, Randall Mackie, and Wolfgang Soyer"},
    {title="Negative transients in central-loop time-domain electromagnetic data: Induced polarization or 3D coupling effect?", authors="Dikun Yang, Ming Cheng, and Qiang Luo"},
    {title="Impacts of magnetic permeability on electromagnetic data collected in settings with steel-cased wells", authors="Lindsey J. Heagy and Douglas W. Oldenburg"},
]

[[extra.events]]
title = "Coffee Break"
day = "2023-11-13"
from = "15:00"
to = "15:30"

[[extra.events]]
title = "Poster Lightning Talks"
day = "2023-11-13"
from = "15:30"
to = "16:15"

[[extra.events]]
title = "Poster Reception"
day = "2023-11-13"
from = "16:15"
to = "18:30"
posters = [
    {title="3D inversion of semi-airborne magnetometric resistivity data", authors="Zhongchang Chen and Dikun Yang"},
    {title="Conductivity structure beneath Australia constrained by 3-D inversion of MT Tippers in spherical geometry", authors="Filippo Cicchetti "},
    {title="3D AMT/MT case histories from Brazil", authors="Patricia de Lugão"},
    {title="3D minimum-structure inversion for CSEM problems using potentials and unstructured tetrahedral grids", authors="K.B. Kara and C.G. Farquharson"},
    {title="Targeting epithermal Au-Ag using helicopter VTEM 1D resistivity and 3D magnetic inversion results, and radiometric data at Lawyers Project, North-Central BC, Canada", authors="Karl Kwan, Jean Legault, Jim Greig, Ewan Webster and Mark Hanki"},
    {title="A parallel adaptive finite-element method for 3-D large-scale controlled-source electromagnetic forward modelling with hierarchical tetrahedral grids", authors="Z. Liu, Z. Ren, H. Uao, J. Tang, X. Lu, and C.G. Farquharson"},
    {title="Fast 3D magnetotelluric forward modeling using survey decomposition", authors="Lian Liu, Dikun Yang"},
    {title="Using convolutional neural networks to classify UXO with multicomponent electromagnetic induction data", authors="Jorge Lopez-Alvis, Lindsey J. Heagy, Douglas W. Oldenburg, Stephen Billings and Lin-Ping Song"},
    {title="2.5D Inversion of frequency-domain Land CSEM data using Broyden's method", authors="Ali Mohand-Saïd"},
    {title="DESMEX - Evolution of Semi-airborne Controlled-source Electromagnetics for Mineral Exploration and Beyond", authors="The DESMEX Team"},
    {title="3D Casing-Source Electromagnetic Modeling for CO2 Plumes and Enhanced Geothermal Systems Monitoring", authors="Evan Schankee Um and David L. Alumbaugh"},
    {title="Petrophysically constrained joint inversion of multi-physical data using the extended alternting direction method of multipliers", authors="Ke Wang, Dikun Yang"},
    # {title="Comparison of MVI with sparse norm susceptibility inversion accounting for demagnetization", authors="John M. Weis, Lindsey J. Heagy, and Douglas W. Oldenburg"},
    {title="Reparametrizing the Geophysical Inverse Problem using a Convolutional Neural Network", authors="Anran Xu and Lindsey Heagy"},
]

# Tuesday

[[extra.events]]
title = "Inversion (part 1)"
day = "2023-11-14"
from = "09:00"
to = "10:30"
chair = "Toshi Uchida"
talks = [
    {title="Resolving bottlenecks of 3D controlled-source electromagnetic Gauss-Newton inversion", authors="Anna Avdeeva, Rune Mittet and Ole Martin Pedersen"},
    {title="Surface geometry inversion of TEM data for thin, dipping conductors", authors="Xushan Lu, Colin Farquharson and Peter Lelièvre"},
    {title="Including geological orientation information into geophysical inversions with unstructured tetrahedral meshes", authors="Mitra Kangazian, and Colin G. Farquharson"},
]

[[extra.events]]
title = "Coffee Break"
day = "2023-11-14"
from = "10:30"
to = "11:00"

[[extra.events]]
title = "Inversion (part 2)"
day = "2023-11-14"
from = "11:00"
to = "12:00"
chair = "Colin Farquharson"
talks = [
    {title="Hybrid OCCAM-Conjugate Gradients Inversion Algorithms with Applications to Marine CSEM data", authors="Gary D. Egbert, Naser Meqbel and Paulo Werdt"},
    {title="3D inversion of frequency-domain controlled source electromagnetic data for hydraulic fracturing fluid imaging with the effect of steel casings", authors="Ying Hu, and Dikun Yang"},
]

[[extra.events]]
title = "Data Acquisition & Instrumentation (part 1)"
day = "2023-11-14"
from = "13:30"
to = "13:30"
chair = "Alan Jones"
talks = [
    {title="A Modeling Assessment of Using Optical Fiber Devices For Electric Field Measurements", authors="David Alumbaugh, Evan Um, Michael T. V. Wylie and Bjorn Paulsson"},
    {title="Copper permalloys for fluxgate magnetometer sensors", authors="B. Barry Narod1, David M. Miles"},
    {title="Interferographic TEM Beamforming Resolution", authors="Bryan James, Kyubo Noh, Andrei Swidinsky, Johannes Stoll, and Daryl Ball"},
]

[[extra.events]]
title = "Group Photo"
day = "2023-11-14"
from = "15:00"
to = "15:15"

[[extra.events]]
title = "Coffee Break"
day = "2023-11-14"
from = "15:15"
to = "15:45"

[[extra.events]]
title = "Data Acquisition & Instrumentation (part 2)"
day = "2023-11-14"
from = "15:45"
to = "17:15"
chair = "Jean Legault"
talks = [
    {title="UAV-based semi-airborne CSEM for mineral exploration - 3D joint inversion of scalar and vector magnetometer data", authors="Raphael Rochlitz, Philipp Kotowski, Thomas Günther, and Michael Becken"},
    {title="Enhancing Subsurface Imaging in Mineral Exploration through Optimized large- scale Semi-Airborne Surveys: Synthetic Modelling and field Data", authors="Saeed Nazari, Raphael Rochlitz, and Thomas Günther "},
    {title="Airborne Natural Source Electromagnetics Using an Arbitrary Base Station", authors="Devin C. Cowan, Lindsey J. Heagy and Douglas W. Oldenburg"},
]

[[extra.events]]
title = "Banquet at Cecil Green Park House"
day = "2023-11-14"
from = "17:30"
to = "22:00"
content = "6251 Cecil Green Park Rd"

# Wednesday
[[extra.events]]
title = "Case Studies (part 1)"
day = "2023-11-15"
from = "09:30"
to = "10:30"
chair = "Patricia de Lugao"
talks = [
    {title="Comparison of 3D finite-element and finite-difference inversion of magnetotelluric data in Okuaizu geothermal area, northern Japan", authors="Toshihiro Uchida and Yusuke Yamaya"},
    {title="3D inversion of onshore controlled source electromagnetic data in the Kusatsu- Shirane Volcano", authors="Keiichi Ishizu, Yasuo Ogawa, Kuo Hsuan Tseng, Takahiro Kunitomo, Norihiro Kitaoka, Grant Caldwell, Takuto Minami, Sohei Serita, Hiroshi Ichihara, Ted Bertrand, and Wiebke Heise"},
]

[[extra.events]]
title = "Coffee Break"
day = "2023-11-15"
from = "10:30"
to = "11:00"

[[extra.events]]
title = "Case Studies (part 2)"
day = "2023-11-15"
from = "11:00"
to = "12:00"
chair = "Raphael Rochlitz"
talks = [
    {title="3D ZTEM Airborne Natural Field EM & Magnetic Inversion and Mineral Targeting Results over the Berg Porphyry Copper Project, near Houston, British Columbia", authors="Jean M. Legault, Karl Kwan, and Shane Ebert"},
    {title="AEM Surveys Applied for Iron Formation Mapping: A Proxy for Iron Ore Exploration", authors="Marco Antonio Couto Junior, Dionisio Uendro Carlos and Raphael Fernandes Prieto"},
]

[[extra.events]]
title = "Concluding remarks"
day = "2023-11-15"
from = "12:00"
to = "12:30"
+++
