const destinations = [
  {
    id: "long-hai",
    day: "ĐIỂM 01",
    type: "BÃI BIỂN",
    name: "Long Hải",
    place: "Long Hải, Bà Rịa - Vũng Tàu",
    coordinates: { latitude: 10.3872284, longitude: 107.2380025 },
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Long+Hai,+Ba+Ria+-+Vung+Tau,+Vietnam",
  },
  {
    id: "ke-ga",
    day: "ĐIỂM 02",
    type: "MŨI KÊ GÀ",
    name: "Kê Gà",
    place: "Kê Gà, Tân Thành, Lâm Đồng",
    coordinates: { latitude: 10.7088833, longitude: 107.9842954 },
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Ke+Ga,+Tan+Thanh,+Lam+Dong,+Vietnam",
  },
  {
    id: "bau-trang",
    day: "ĐIỂM 03",
    type: "ĐỒI CÁT",
    name: "Bàu Trắng",
    place: "Bàu Trắng, Hòa Thắng, Lâm Đồng",
    coordinates: { latitude: 11.063895, longitude: 108.4231538 },
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Bau+Trang,+Hoa+Thang,+Lam+Dong,+Vietnam",
  },
  {
    id: "vinh-hy",
    day: "ĐIỂM 04",
    type: "VỊNH BIỂN",
    name: "Vịnh Vĩnh Hy",
    place: "Vịnh Vĩnh Hy, Ninh Thuận",
    coordinates: { latitude: 11.7176196, longitude: 109.2021271 },
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Vinh+Hy+Bay,+Vietnam",
  },
  {
    id: "cam-ranh",
    day: "ĐIỂM 05",
    type: "THÀNH PHỐ BIỂN",
    name: "Cam Ranh",
    place: "Cam Ranh, Khánh Hòa",
    coordinates: { latitude: 11.9377636, longitude: 109.158275 },
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Cam+Ranh,+Khanh+Hoa,+Vietnam",
  },
  {
    id: "bai-dai",
    day: "ĐIỂM 06",
    type: "BÃI BIỂN",
    name: "Bãi Dài Nha Trang",
    place: "Bãi Dài Nha Trang, Khánh Hòa",
    coordinates: { latitude: 12.0270699, longitude: 109.224571 },
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Bai+Dai+Nha+Trang,+Khanh+Hoa,+Vietnam",
  },
  {
    id: "deo-cu-hin",
    day: "ĐIỂM 07",
    type: "ĐÈO VEN BIỂN",
    name: "Đèo Cù Hin",
    place: "Đèo Cù Hin, Nam Nha Trang, Khánh Hòa",
    coordinates: { latitude: 12.1337318, longitude: 109.2106963 },
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Deo+Cu+Hin,+Khanh+Hoa,+Vietnam",
  },
  {
    id: "luong-son",
    day: "ĐIỂM 08",
    type: "ĐIỂM DỪNG",
    name: "Lương Sơn",
    place: "Lương Sơn, Vĩnh Lương, Nha Trang, Khánh Hòa",
    coordinates: { latitude: 12.3348966, longitude: 109.1984106 },
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Luong+Son,+Vinh+Luong,+Nha+Trang,+Khanh+Hoa,+Vietnam",
  },
  {
    id: "deo-co-ma",
    day: "ĐIỂM 09",
    type: "ĐÈO",
    name: "Đèo Cổ Mã",
    place: "Đèo Cổ Mã, Đại Lãnh, Khánh Hòa",
    coordinates: { latitude: 12.8165195, longitude: 109.3611308 },
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Deo+Co+Ma,+Dai+Lanh,+Khanh+Hoa,+Vietnam",
  },
  {
    id: "mui-dien",
    day: "ĐIỂM 10",
    type: "MŨI ĐẤT",
    name: "Mũi Điện",
    place: "Mũi Điện, Phú Yên",
    coordinates: { latitude: 12.8955394, longitude: 109.4574634 },
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Mui+Dien,+Phu+Yen,+Vietnam",
  },
  {
    id: "ganh-da-dia",
    day: "ĐIỂM 11",
    type: "THẮNG CẢNH",
    name: "Gành Đá Đĩa",
    place: "Gành Đá Đĩa, Tuy An Đông, Phú Yên",
    coordinates: { latitude: 13.3539579, longitude: 109.2937518 },
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Ganh+Da+Dia,+Tuy+An+Dong,+Phu+Yen,+Vietnam",
  },
  {
    id: "song-cau",
    day: "ĐIỂM 12",
    type: "THÀNH PHỐ",
    name: "Sông Cầu",
    place: "Sông Cầu, Phú Yên",
    coordinates: { latitude: 13.5066337, longitude: 109.2474701 },
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Song+Cau,+Phu+Yen,+Vietnam",
  },
  {
    id: "go-quy-nhon",
    day: "ĐIỂM 13",
    type: "ĐIỂM TIẾP TẾ",
    name: "GO! Quy Nhơn",
    place: "GO! Quy Nhơn, Gia Lai",
    coordinates: { latitude: 13.7547513, longitude: 109.2078568 },
    mapUrl: "https://www.google.com/maps/search/?api=1&query=GO+Quy+Nhon,+Gia+Lai,+Vietnam",
  },
  {
    id: "bong-son",
    day: "ĐIỂM 14",
    type: "ĐIỂM DỪNG",
    name: "Bồng Sơn",
    place: "Bồng Sơn, Bình Định",
    coordinates: { latitude: 14.4119073, longitude: 109.0334318 },
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Bong+Son,+Binh+Dinh,+Vietnam",
  },
];

const destinationGrid = document.querySelector("#destinationGrid");
const routeOverview = document.querySelector("#routeOverview");
const routeTabPanel = document.querySelector("#routeTabPanel");
const expenseTabPanel = document.querySelector("#expenseTabPanel");
const floatingTabMenu = document.querySelector("#floatingTabMenu");
const tabMenuTrigger = document.querySelector("#tabMenuTrigger");
const tabMenuOptions = document.querySelector("#tabMenuOptions");
const tabMenuOptionButtons = document.querySelectorAll("[data-tab-target]");
const filterButtons = document.querySelectorAll(".filter-button");
const destinationSearch = document.querySelector("#destinationSearch");
const resultSummary = document.querySelector("#resultSummary");
const visitedStorageKey = "di-mot-vong-visited-v2";
const memoryDatabaseName = "di-mot-vong-memories";
const memoryObjectStoreName = "destination-memories";
const maxMemoryPhotos = 3;
const expenseStorageKey = "di-mot-vong-expenses-v1";
const tripCloud = window.tripCloud;
const expenseCategories = {
  food: { label: "Ăn uống", icon: "🍜" },
  vehicle: { label: "Xe cộ", icon: "🛵" },
  fine: { label: "Phạt", icon: "🚨" },
  other: { label: "Chi phí khác", icon: "🧾" },
};
const expenseTotal = document.querySelector("#expenseTotal");
const expenseCount = document.querySelector("#expenseCount");
const expenseHistory = document.querySelector("#expenseHistory");
const expenseForm = document.querySelector("#expenseForm");
const expenseAmountInput = document.querySelector("#expenseAmount");
const expenseSubmit = document.querySelector("#expenseSubmit");
const expenseFormStatus = document.querySelector("#expenseFormStatus");
const expenseCategoryButtons = document.querySelectorAll("[data-expense-category]");
const cloudSyncStatus = document.querySelector("#cloudSyncStatus");
const cloudLoginButton = document.querySelector("#cloudLoginButton");
const cloudShareButton = document.querySelector("#cloudShareButton");
const cloudLogoutButton = document.querySelector("#cloudLogoutButton");
const cloudLoginDialog = document.querySelector("#cloudLoginDialog");
const cloudLoginForm = document.querySelector("#cloudLoginForm");
const cloudLoginStatus = document.querySelector("#cloudLoginStatus");
const cloudLoginSubmit = document.querySelector("#cloudLoginSubmit");
const footerSyncNotice = document.querySelector("#footerSyncNotice");
const progressFill = document.querySelector("#progressFill");
const progressTrack = document.querySelector(".progress-track");
const progressCaption = document.querySelector("#progressCaption");
const visitedSummary = document.querySelector("#visitedSummary");
let activeFilter = "all";
const locateButton = document.querySelector("#locateButton");
const locationStatus = document.querySelector("#locationStatus");
const routeDistance = document.querySelector("#routeDistance");
const routeDuration = document.querySelector("#routeDuration");
const routeRemainingDistance = document.querySelector("#routeRemainingDistance");
const routeRemainingDuration = document.querySelector("#routeRemainingDuration");
const routeTotalDistanceLabel = document.querySelector("#routeTotalDistanceLabel");
const routeTotalDurationLabel = document.querySelector("#routeTotalDurationLabel");
const routeRemainingDistanceLabel = document.querySelector("#routeRemainingDistanceLabel");
const realDirectionsLink = document.querySelector("#realDirectionsLink");
const nextLegLabel = document.querySelector("#nextLegLabel");
const currentPositionLabel = document.querySelector("#currentPositionLabel");
const nextStopName = document.querySelector("#nextStopName");
const nextStopDuration = document.querySelector("#nextStopDuration");
const nextStopArrival = document.querySelector("#nextStopArrival");
const nextStopCard = document.querySelector("#nextStopCard");
const routeMapMarkers = document.querySelector("#routeMapMarkers");
const routeMapSvg = document.querySelector("#routeMapSvg");
const routeMapTag = document.querySelector("#routeMapTag");
const simulationMap = document.querySelector(".simulation-map");
const mapRouteLine = document.querySelector("#mapRouteLine");
const mapRouteShadow = document.querySelector("#mapRouteShadow");
const mapProgressLine = document.querySelector("#mapProgressLine");
const originFlowLink = document.querySelector("#originFlowLink");
const initialFlowStops = [...routeOverview.querySelectorAll(".route-stop:not(.start-stop)")];
const initialFlowLegs = new Map(
  [...routeOverview.querySelectorAll(".route-connector")]
    .map((connector) => [Number(connector.dataset.legIndex), connector]),
);
const startFlowStop = routeOverview.querySelector(".start-stop");
const initialStartFlowMarkup = startFlowStop.innerHTML;
const initialStartFlowLabel = startFlowStop.getAttribute("aria-label");
const liveClock = document.querySelector("#liveClock");
let originCoordinates = null;
let nextStopEstimateMinutes = null;
let destinationMemories = new Map();
const pendingMemoryUploads = new Map();
let photoObjectUrls = new Map();
let photoStorageError = null;
let photoDatabase = null;
let photoStorageReady = null;
let selectedExpenseCategory = null;
let expenses = loadExpenses();
let cloudReady = false;
let cloudOwner = false;
let cloudError = null;
let localPreCloudSnapshot = null;
let openExpenseId = null;
let menuHoldTimer = null;
let menuLongPressed = false;
const averageMotorbikeSpeed = 55;
const roadDistanceMultiplier = 1.25;
const routeMapColumns = 5;
const routeMapRowSpacing = 89;
const routeDirections = [
  null,
  "https://www.google.com/maps/dir/Long+H%E1%BA%A3i,+B%C3%A0+R%E1%BB%8Ba+-+V%C5%A9ng+T%C3%A0u,+Vi%E1%BB%87t+Nam/K%C3%AA+G%C3%A0,+T%C3%A2n+Th%C3%A0nh,+L%C3%A2m+%C4%90%E1%BB%93ng,+Vi%E1%BB%87t+Nam/@10.5108474,107.1147546,136929m/data=!3m1!1e3!4m15!4m14!1m5!1m1!1s0x31757683ea7c2a65:0x1de58b626b693795!2m2!1d107.2380025!2d10.3872284!1m5!1m1!1s0x3175d69b149c32d9:0xb77d119eb9981cb1!2m2!1d107.9842954!2d10.7088833!3e0!5i1?entry=ttu&g_ep=EgoyMDI2MTExOC4xIKXMDSoASAFQAw%3D%3D",
  "https://www.google.com/maps/dir/K%C3%AA+G%C3%A0,+T%C3%A2n+Th%C3%A0nh,+L%C3%A2m+%C4%90%E1%BB%93ng,+Vi%E1%BB%87t+Nam/B%C3%A0u+Tr%E1%BA%AFng,+H%C3%B2a+Th%E1%BA%AFng,+L%C3%A2m+%C4%90%E1%BB%93ng,+Vi%E1%BB%87t+Nam/@10.9779017,108.0527186,68358m/data=!3m1!1e3!4m15!4m14!1m5!1m1!1s0x3175d69b149c32d9:0xb77d119eb9981cb1!2m2!1d107.9842954!2d10.7088833!1m5!1m1!1s0x317694db9a98bb8f:0x8671ae17aef9b520!2m2!1d108.4231538!2d11.063895!3e0!5i1?entry=ttu&g_ep=EgoyMDI2MTExOC4xIKXMDSoASAFQAw%3D%3D",
  "https://www.google.com/maps/dir/B%C3%A0u+Tr%E1%BA%AFng,+H%C3%B2a+Th%E1%BA%AFng,+L%C3%A2m+%C4%90%E1%BB%93ng,+Vi%E1%BB%87t+Nam/V%E1%BB%8Bnh+V%C4%A9nh+Hy,+Vi%E1%BB%87t+Nam/@11.4391814,108.4896616,136499m/data=!3m2!1e3!4b1!4m13!4m12!1m5!1m1!1s0x317694db9a98bb8f:0x8671ae17aef9b520!2m2!1d108.4231538!2d11.063895!1m5!1m1!1s0x3170bf77a1a9d5f9:0x3c558f25f333bb4e!2m2!1d109.2021271!2d11.7176196?entry=ttu&g_ep=EgoyMDI2MTExOC4xIKXMDSoASAFQAw%3D%3D",
  "https://www.google.com/maps/dir/V%E1%BB%8Bnh+V%C4%A9nh+Hy,+Vi%E1%BB%87t+Nam/Cam+Ranh,+Kh%C3%A1nh+H%C3%B2a,+Vi%E1%BB%87t+Nam/@11.7582056,108.9729999,68172m/data=!3m2!1e3!4b1!4m13!4m12!1m5!1m1!1s0x3170bf77a1a9d5f9:0x3c558f25f333bb4e!2m2!1d109.2021271!2d11.7176196!1m5!1m1!1s0x3170ed66f04663cf:0xd276e2366c1115d7!2m2!1d109.158275!2d11.9377636?entry=ttu&g_ep=EgoyMDI2MTExOC4xIKXMDSoASAFQAw%3D%3D",
  "https://www.google.com/maps/dir/Cam+Ranh,+Kh%C3%A1nh+H%C3%B2a,+Vi%E1%BB%87t+Nam/B%C3%A3i+D%C3%A0i+Nha+Trang,+Kh%C3%A1nh+H%C3%B2a,+Vi%E1%BB%87t+Nam/",
  "https://www.google.com/maps/dir/B%C3%A3i+D%C3%A0i+Nha+Trang,+Kh%C3%A1nh+H%C3%B2a,+Vi%E1%BB%87t+Nam/%C4%90%C3%A8o+C%C3%B9+Hin,+Nam+Nha+Trang,+Kh%C3%A1nh+H%C3%B2a,+Vi%E1%BB%87t+Nam/@12.1119394,109.1799515,17021m/data=!3m1!1e3!4m13!4m12!1m5!1m1!1s0x31708b2043a6ae31:0xd3ff083871c7e4fe!2m2!1d109.224571!2d12.0270699!1m5!1m1!1s0x3170606b35612453:0x9528e63409de30a!2m2!1d109.2106963!2d12.1337318?entry=ttu&g_ep=EgoyMDI2MTExOC4xIKXMDSoASAFQAw%3D%3D",
  "https://www.google.com/maps/dir/%C4%90%C3%A8o+C%C3%B9+Hin,+Nam+Nha+Trang,+Kh%C3%A1nh+H%C3%B2a,+Vi%E1%BB%87t+Nam/L%C6%B0%C6%A1ng+S%C6%A1n,+V%C4%A9nh+L%C6%B0%C6%A1ng,+Nha+Trang,+Kh%C3%A1nh+H%C3%B2a,+Vi%E1%BB%87t+Nam/@12.3195392,109.2037193,8504m/data=!3m1!1e3!4m14!4m13!1m5!1m1!1s0x3170606b35612453:0x9528e63409de30a!2m2!1d109.2106963!2d12.1337318!1m5!1m1!1s0x317069cd107ab8e7:0x6eb448586b73b10b!2m2!1d109.1984106!2d12.3348966!5i1?entry=ttu&g_ep=EgoyMDI2MTExOC4xIKXMDSoASAFQAw%3D%3D",
  "https://www.google.com/maps/dir/12.3291132,109.1930832/%C4%90%C3%A8o+C%E1%BB%95+M%C3%A3,+R986%2BJF2,+QL1A,+%C4%90%E1%BA%A1i+L%C3%A3nh,+Kh%C3%A1nh+H%C3%B2a,+Vi%E1%BB%87t+Nam/@12.8124591,109.3566503,8736m/data=!3m1!1e3!4m9!4m8!1m0!1m5!1m1!1s0x316fe3afad991537:0xcfb7c2fc5cbe26d9!2m2!1d109.3611308!2d12.8165195!3e0?entry=ttu&g_ep=EgoyMDI2MTExOC4xIKXMDSoASAFQAw%3D%3D",
  "https://www.google.com/maps/dir/%C4%90%C3%A8o+C%E1%BB%95+M%C3%A3,+R986%2BJF2,+QL1A,+%C4%90%E1%BA%A1i+L%C3%A3nh,+Kh%C3%A1nh+H%C3%B2a,+Vi%E1%BB%87t+Nam/M%C5%A9i+%C4%90i%E1%BB%87n,+Ph%C3%BA+Y%C3%AAn,+VCVX%2BGP7,+C%E1%BA%A7u+M%C5%A9i+%C4%90i%E1%BB%87n,+%C4%90%C6%B0%E1%BB%9Dng+l%C3%AAn+h%E1%BA%A3i+%C4%91%C4%83ng,+H%C3%B2a+Xu%C3%A2n,+%C4%90%E1%BA%AFk+L%E1%BA%AFk,+Vi%E1%BB%87t+Nam/@12.8640835,109.4026461,3568m/data=!3m1!1e3!4m14!4m13!1m5!1m1!1s0x316fe3afad991537:0xcfb7c2fc5cbe26d9!2m2!1d109.3611308!2d12.8165195!1m5!1m1!1s0x316ffb006fe49f6b:0x49dc0ecd248734aa!2m2!1d109.4574634!2d12.8955394!3e0?entry=ttu&g_ep=EgoyMDI2MTExOC4xIKXMDSoASAFQAw%3D%3D",
  "https://www.google.com/maps/dir/M%C5%A9i+%C4%90i%E1%BB%87n,+Ph%C3%BA+Y%C3%AAn,+VCVX%2BGP7,+C%E1%BA%A7u+M%C5%A9i+%C4%90i%E1%BB%87n,+%C4%90%C6%B0%E1%BB%9Dng+l%C3%AAn+h%E1%BA%A3i+%C4%91%C4%83ng,+H%C3%B2a+Xu%C3%A2n,+%C4%90%E1%BA%AFk+L%E1%BA%AFk,+Vi%E1%BB%87t+Nam/G%C3%A0nh+%C4%90%C3%A1+%C4%90%C4%A9a,+Unnamed+Road,+Tuy+An+%C4%90%C3%B4ng,+%C4%90%E1%BA%AFk+L%E1%BA%AFk,+Vi%E1%BB%87t+Nam/@13.2002586,109.2839586,530m/data=!3m1!1e3!4m14!4m13!1m5!1m1!1s0x316ffb006fe49f6b:0x49dc0ecd248734aa!2m2!1d109.4574634!2d12.8955394!1m5!1m1!1s0x316f9bd2d7763f91:0xbf05c47b09caa799!2m2!1d109.2937518!2d13.3539579!3e0?entry=ttu&g_ep=EgoyMDI2MTExOC4xIKXMDSoASAFQAw%3D%3D",
  "https://www.google.com/maps/dir/G%C3%A0nh+%C4%90%C3%A1+%C4%90%C4%A9a,+Unnamed+Road,+Tuy+An+%C4%90%C3%B4ng,+%C4%90%E1%BA%AFk+L%E1%BA%AFk,+Vi%E1%BB%87t+Nam/S%C3%B4ng+C%E1%BA%A7u,+Ph%C3%BA+Y%C3%AAn,+Vi%E1%BB%87t+Nam/@13.3595539,109.2805419,3561m/data=!3m1!1e3!4m14!4m13!1m5!1m1!1s0x316f9bd2d7763f91:0xbf05c47b09caa799!2m2!1d109.2937518!2d13.3539579!1m5!1m1!1s0x316f9e5d5e00cb6b:0xd64bdd0ac3daa0af!2m2!1d109.2474701!2d13.5066337!3e0?entry=ttu&g_ep=EgoyMDI2MTExOC4xIKXMDSoASAFQAw%3D%3D",
  "https://www.google.com/maps/dir/S%C3%B4ng+C%E1%BA%A7u,+Ph%C3%BA+Y%C3%AAn,+Vi%E1%BB%87t+Nam/GO!+Quy+Nh%C6%A1n,+Khu+%C4%91%C3%B4+Th%E1%BB%8B+An+Ph%C6%B0%E1%BB%9Bc,+xanh+V%C5%A9ng+Chua,+Quy+Nh%C6%A1n+Nam,+Gia+Lai,+Vi%E1%BB%87t+Nam/@13.7360637,109.1944547,10055m/data=!3m1!1e3!4m14!4m13!1m5!1m1!1s0x316f9e5d5e00cb6b:0xd64bdd0ac3daa0af!2m2!1d109.2474701!2d13.5066337!1m5!1m1!1s0x316f6cc33fe1cbb7:0x2164ae54d988c534!2m2!1d109.2078568!2d13.7547513!3e0?entry=ttu&g_ep=EgoyMDI2MTExOC4xIKXMDSoASAFQAw%3D%3D",
  "https://www.google.com/maps/dir/GO!+Quy+Nh%C6%A1n,+Khu+%C4%91%C3%B4+Th%E1%BB%8B+An+Ph%C6%B0%E1%BB%9Bc,+xanh+V%C5%A9ng+Chua,+Quy+Nh%C6%A1n+Nam,+Gia+Lai,+Vi%E1%BB%87t+Nam/B%E1%BB%93ng+S%C6%A1n,+B%C3%ACnh+%C4%90%E1%BB%8Bnh,+Vi%E1%BB%87t+Nam/@14.0932623,108.7935104,10z/data=!4m15!4m14!1m5!1m1!1s0x316f6cc33fe1cbb7:0x2164ae54d988c534!2m2!1d109.2078568!2d13.7547513!1m5!1m1!1s0x3168cf965930ad73:0x6686228002472105!2m2!1d109.0334318!2d14.4119073!3e0!5i2?entry=ttu&g_ep=EgoyMDI2MTExOC4xIKXMDSoASAFQAw%3D%3D",
];
const vietnameseClock = new Intl.DateTimeFormat("vi-VN", {
  timeZone: "Asia/Ho_Chi_Minh",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hourCycle: "h23",
});
const vietnameseArrivalClock = new Intl.DateTimeFormat("vi-VN", {
  timeZone: "Asia/Ho_Chi_Minh",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
});

function loadVisitedPlaces() {
  try {
    const stored = JSON.parse(localStorage.getItem(visitedStorageKey) || "[]");
    if (!Array.isArray(stored)) throw new Error("Saved visit list is not an array.");
    return normalizeVisitedPlaces(stored);
  } catch (error) {
    console.warn("Could not read the saved visit list.", error);
    return new Set();
  }
}

function normalizeVisitedPlaces(ids) {
  const savedIds = new Set(ids.filter((id) => destinations.some((destination) => destination.id === id)));
  const sequentialVisits = new Set();
  for (const destination of destinations) {
    if (!savedIds.has(destination.id)) break;
    sequentialVisits.add(destination.id);
  }
  if (sequentialVisits.size !== savedIds.size) {
    console.warn("Ignoring visit marks after the first unvisited destination to keep the route in order.");
  }
  return sequentialVisits;
}

function canEditTrip() {
  return !tripCloud.configured || (cloudReady && cloudOwner);
}

function getLocalCloudSnapshot() {
  return {
    destinationIds: destinations.map((destination) => destination.id),
    visitedIds: [...visitedPlaces],
    expenses,
    memories: [...destinationMemories],
  };
}

function cacheCloudState() {
  try {
    localStorage.setItem(visitedStorageKey, JSON.stringify([...visitedPlaces]));
    localStorage.setItem(expenseStorageKey, JSON.stringify(expenses));
  } catch (error) {
    console.warn("Could not cache the shared trip data locally.", error);
  }
}

function cacheCloudPhotosLocally(previousMemories) {
  previousMemories.forEach((_, destinationId) => {
    if (!destinationMemories.has(destinationId)) {
      saveDestinationMemories(destinationId, []).catch((error) => {
        console.warn("Could not clear a stale local photo cache.", error);
      });
    }
  });
  destinationMemories.forEach((photos, destinationId) => {
    if (photos.some((photo) => photo && photo.blob)) {
      saveDestinationMemories(destinationId, photos).catch((error) => {
        console.warn("Could not cache shared trip photos locally.", error);
      });
    }
  });
}

function applyCloudSnapshot(snapshot) {
  const cachedMemories = destinationMemories;
  visitedPlaces = normalizeVisitedPlaces(snapshot.visitedIds || []);
  expenses = (snapshot.expenses || []).filter(isValidExpense);
  photoObjectUrls.forEach((url) => URL.revokeObjectURL(url));
  photoObjectUrls.clear();
  destinationMemories = snapshot.memories || new Map();
  destinationMemories.forEach((photos, destinationId) => {
    const cachedPhotos = cachedMemories.get(destinationId) || [];
    photos.forEach((photo, photoIndex) => {
      const cachedPhoto = cachedPhotos[photoIndex];
      const importedLegacyPhoto = cachedPhoto && !cachedPhoto.path && photo.path.includes("-legacy.");
      if (cachedPhoto && (cachedPhoto.path === photo.path || importedLegacyPhoto) && cachedPhoto.blob) {
        photos[photoIndex] = { ...photo, blob: cachedPhoto.blob };
      }
    });
  });
  cloudOwner = snapshot.isOwner === true;
  cloudReady = true;
  cloudError = null;
  if (cloudOwner) {
    cacheCloudState();
    cacheCloudPhotosLocally(cachedMemories);
    localPreCloudSnapshot = null;
  }
  updateCloudUi();
  renderApplicationState();
}

function updateCloudUi() {
  if (!tripCloud.configured) {
    cloudSyncStatus.textContent = tripCloud.configurationError
      ? `${tripCloud.configurationError} Dữ liệu hiện vẫn lưu trên thiết bị này.`
      : "Chưa bật đồng bộ cloud; dữ liệu đang lưu trên thiết bị này.";
    footerSyncNotice.textContent = "Dữ liệu đang lưu trên thiết bị này.";
    cloudLoginButton.hidden = true;
    cloudShareButton.hidden = true;
    cloudLogoutButton.hidden = true;
  } else {
    cloudLoginButton.hidden = cloudOwner || !tripCloud.isConnected;
    cloudShareButton.hidden = !cloudOwner || !cloudReady;
    cloudLogoutButton.hidden = !cloudOwner;
    cloudSyncStatus.textContent = cloudError
      ? `Không thể đồng bộ cloud: ${cloudError}`
      : !cloudReady
        ? "Đang kết nối kho dữ liệu dùng chung…"
        : cloudOwner
          ? "Đã đăng nhập chủ sở hữu · dữ liệu được đồng bộ lên cloud."
          : "Đang xem lộ trình, chi phí và ảnh được chia sẻ.";
    footerSyncNotice.textContent = cloudOwner
      ? "Dữ liệu đã đồng bộ với kho cloud."
      : "Chế độ xem dữ liệu đã chia sẻ.";
  }

  document.body.classList.toggle("cloud-read-only", tripCloud.configured && !canEditTrip());
  expenseForm.hidden = tripCloud.configured && !canEditTrip();
}

function renderApplicationState() {
  updateVisitedProgress();
  renderDestinations();
  renderRouteOverview();
  renderRouteSimulation();
  renderExpenseHistory();
}

function getSnapshotForOwnerImport() {
  return localPreCloudSnapshot || getLocalCloudSnapshot();
}

let visitedPlaces = loadVisitedPlaces();

function openMemoryDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(memoryDatabaseName, 1);
    request.onupgradeneeded = () => {
      if (!request.result.objectStoreNames.contains(memoryObjectStoreName)) {
        request.result.createObjectStore(memoryObjectStoreName, { keyPath: "destinationId" });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error("Could not open the photo archive."));
    request.onblocked = () => reject(new Error("The photo archive is blocked by another open tab."));
  });
}

function requestResult(request) {
  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error("The photo archive request failed."));
  });
}

function transactionResult(transaction) {
  return new Promise((resolve, reject) => {
    transaction.oncomplete = () => resolve();
    transaction.onabort = () => reject(transaction.error || new Error("The photo archive update was cancelled."));
    transaction.onerror = () => reject(transaction.error || new Error("The photo archive update failed."));
  });
}

async function initializeMemoryStorage() {
  try {
    photoDatabase = await openMemoryDatabase();
    const transaction = photoDatabase.transaction(memoryObjectStoreName, "readonly");
    const records = await requestResult(transaction.objectStore(memoryObjectStoreName).getAll());
    records.forEach((record) => {
      if (destinations.some((destination) => destination.id === record.destinationId)) {
        destinationMemories.set(record.destinationId, Array.isArray(record.photos) ? record.photos : []);
      }
    });
  } catch (error) {
    photoStorageError = error;
    console.error("Could not load the local photo archive.", error);
  }
}

async function saveDestinationMemories(destinationId, photos) {
  if (photoStorageError || !photoDatabase) {
    throw photoStorageError || new Error("The local photo archive is not available.");
  }

  const transaction = photoDatabase.transaction(memoryObjectStoreName, "readwrite");
  transaction.objectStore(memoryObjectStoreName).put({ destinationId, photos });
  await transactionResult(transaction);
}

async function deleteDestinationMemories(destinationId) {
  if (photoStorageError || !photoDatabase) {
    throw photoStorageError || new Error("The local photo archive is not available.");
  }

  const transaction = photoDatabase.transaction(memoryObjectStoreName, "readwrite");
  transaction.objectStore(memoryObjectStoreName).delete(destinationId);
  await transactionResult(transaction);
}

function getPhotoObjectUrl(destinationId, photoIndex, photo) {
  const key = `${destinationId}:${photoIndex}`;
  if (photo.blob) {
    if (!photoObjectUrls.has(key)) {
      photoObjectUrls.set(key, URL.createObjectURL(photo.blob));
    }
    return photoObjectUrls.get(key);
  }
  if (photo.url) return photo.url;
  if (!photoObjectUrls.has(key)) {
    throw new Error("The photo has no local file or public cloud URL.");
  }
  return photoObjectUrls.get(key);
}

function revokePhotoObjectUrls(destinationId) {
  const prefix = `${destinationId}:`;
  photoObjectUrls.forEach((objectUrl, key) => {
    if (key.startsWith(prefix)) {
      URL.revokeObjectURL(objectUrl);
      photoObjectUrls.delete(key);
    }
  });
}

function updateVisitedProgress() {
  const visitedCount = visitedPlaces.size;
  const totalCount = destinations.length;
  const progressPercent = totalCount ? visitedCount / totalCount * 100 : 0;
  progressFill.style.width = `${progressPercent}%`;
  progressTrack.setAttribute("aria-valuemax", String(totalCount));
  progressTrack.setAttribute("aria-valuenow", String(visitedCount));
  visitedSummary.textContent = `${visitedCount} / ${totalCount}`;
  progressCaption.textContent = `${visitedCount} / ${totalCount} địa điểm`;

  document.querySelector("#countAll").textContent = String(totalCount);
  document.querySelector("#countUnvisited").textContent = String(totalCount - visitedCount);
  document.querySelector("#countVisited").textContent = String(visitedCount);
}

function normalizeText(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("vi-VN")
    .replace(/đ/g, "d");
}

function calculateStraightLineDistance(start, end) {
  const earthRadiusKm = 6371;
  const toRadians = (degrees) => degrees * Math.PI / 180;
  const latitudeDifference = toRadians(end.latitude - start.latitude);
  const longitudeDifference = toRadians(end.longitude - start.longitude);
  const startLatitude = toRadians(start.latitude);
  const endLatitude = toRadians(end.latitude);
  const haversine = Math.sin(latitudeDifference / 2) ** 2
    + Math.cos(startLatitude) * Math.cos(endLatitude) * Math.sin(longitudeDifference / 2) ** 2;
  return 2 * earthRadiusKm * Math.asin(Math.sqrt(haversine));
}

function formatEstimatedDuration(minutes) {
  if (!minutes) return "0 phút";
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  if (!hours) return `~ ${remainingMinutes} phút`;
  return remainingMinutes ? `~ ${hours} giờ ${remainingMinutes} phút` : `~ ${hours} giờ`;
}

function updateCurrentTime() {
  const now = new Date();
  liveClock.textContent = vietnameseClock.format(now);
  liveClock.dateTime = now.toISOString();
  updateNextStopArrival(now);
}

function updateNextStopArrival(now) {
  if (nextStopEstimateMinutes === null) {
    nextStopArrival.textContent = "--:--";
    nextStopArrival.removeAttribute("datetime");
    return;
  }

  const arrival = new Date(now.getTime() + nextStopEstimateMinutes * 60_000);
  nextStopArrival.textContent = vietnameseArrivalClock.format(arrival);
  nextStopArrival.dateTime = arrival.toISOString();
}

function renderRouteOverview() {
  const progressIndex = getFurthestVisitedDestinationIndex();
  const currentDestination = progressIndex >= 0 ? destinations[progressIndex] : null;
  const upcomingDestinations = destinations.slice(progressIndex + 1);
  const children = [startFlowStop];
  let previousDestination = currentDestination;

  if (currentDestination) {
    startFlowStop.classList.add("current-stop");
    startFlowStop.innerHTML = `
      <span class="route-stop-day">VỊ TRÍ HIỆN TẠI</span>
      <span class="route-dot start-dot" aria-hidden="true"></span>
      <strong>${currentDestination.name}</strong>
      <span class="route-stop-note">${currentDestination.place}</span>
    `;
    startFlowStop.href = currentDestination.mapUrl;
    startFlowStop.setAttribute("aria-label", `Vị trí hiện tại tại ${currentDestination.name}`);
  } else {
    startFlowStop.classList.remove("current-stop");
    startFlowStop.innerHTML = initialStartFlowMarkup;
    startFlowStop.setAttribute("aria-label", initialStartFlowLabel);
  }

  upcomingDestinations.forEach((destination) => {
    const destinationIndex = destinations.indexOf(destination);
    const connector = initialFlowLegs.get(destinationIndex);
    const stop = initialFlowStops[destinationIndex];
    connector.dataset.fromDestinationId = previousDestination ? previousDestination.id : "";
    connector.dataset.toDestinationId = destination.id;
    stop.classList.toggle("finish-stop", destination === upcomingDestinations[upcomingDestinations.length - 1]);
    children.push(connector, stop);
    previousDestination = destination;
  });

  if (!upcomingDestinations.length) {
    const completionNote = document.createElement("p");
    completionNote.className = "flow-complete-note";
    completionNote.textContent = "Đã đánh dấu tất cả điểm đến.";
    children.push(completionNote);
    if (currentDestination) {
      startFlowStop.href = currentDestination.mapUrl;
      startFlowStop.setAttribute("aria-label", `Đã hoàn thành tuyến tại ${currentDestination.name}`);
    }
  }

  routeOverview.replaceChildren(...children);
  routeOverview.setAttribute(
    "aria-label",
    upcomingDestinations.length
      ? `Flow tour còn ${upcomingDestinations.length} điểm chưa ghé`
      : "Flow tour đã hoàn thành",
  );
}

function renderRouteLegEstimates() {
  let firstConnector = true;
  document.querySelectorAll(".route-connector").forEach((connector) => {
    const destination = destinations.find((item) => item.id === connector.dataset.toDestinationId);
    const previousDestination = destinations.find((item) => item.id === connector.dataset.fromDestinationId);
    const destinationIndex = destination ? destinations.indexOf(destination) : -1;
    const previousIndex = previousDestination ? destinations.indexOf(previousDestination) : -1;
    const startsAtOrigin = !previousDestination;
    const start = startsAtOrigin ? originCoordinates : previousDestination.coordinates;
    const distanceLabel = connector.querySelector(".route-distance");
    const durationLabel = connector.querySelector(".route-duration");
    const legLink = connector.querySelector(".flow-leg-link");

    if (!destination || !distanceLabel || !durationLabel || !legLink) {
      return;
    }

    const directionsUrl = startsAtOrigin
      ? googleMapsDirectionsUrl(destination, originCoordinates)
      : destinationIndex === previousIndex + 1
        ? routeDirections[destinationIndex]
        : googleMapsBetweenDestinationsUrl(previousDestination, destination);
    legLink.setAttribute("href", directionsUrl);
    legLink.innerHTML = 'Mở chặng <span aria-hidden="true">↗</span>';

    if (firstConnector) {
      originFlowLink.setAttribute("href", directionsUrl);
      originFlowLink.setAttribute(
        "aria-label",
        previousDestination
          ? `Mở chỉ đường từ ${previousDestination.name} đến ${destination.name} trên Google Maps`
          : originCoordinates
            ? `Mở chỉ đường từ vị trí GPS đến ${destination.name} trên Google Maps`
            : `Mở chỉ đường từ vị trí hiện tại đến ${destination.name} trên Google Maps`,
      );
    }
    firstConnector = false;

    if (!start) {
      distanceLabel.textContent = "Lấy GPS";
      durationLabel.textContent = "—";
      return;
    }

    const straightLineKm = calculateStraightLineDistance(start, destination.coordinates);
    const estimatedRoadKm = Math.round(straightLineKm * roadDistanceMultiplier);
    distanceLabel.textContent = `~ ${estimatedRoadKm} km`;
    durationLabel.textContent = formatEstimatedDuration(Math.round(estimatedRoadKm / averageMotorbikeSpeed * 60));
  });
}

function googleMapsBetweenDestinationsUrl(originDestination, destination) {
  const query = new URLSearchParams({
    api: "1",
    origin: originDestination.place,
    destination: destination.place,
    travelmode: "driving",
  });
  return `https://www.google.com/maps/dir/?${query.toString()}`;
}

function googleMapsDirectionsUrl(destination, origin = null) {
  const query = new URLSearchParams({
    api: "1",
    destination: destination.place,
    travelmode: "driving",
  });
  if (origin) query.set("origin", `${origin.latitude},${origin.longitude}`);
  return `https://www.google.com/maps/dir/?${query.toString()}`;
}

function getFurthestVisitedDestinationIndex() {
  let furthestIndex = -1;
  for (let index = 0; index < destinations.length; index += 1) {
    if (!visitedPlaces.has(destinations[index].id)) break;
    furthestIndex = index;
  }
  return furthestIndex;
}

function estimateRouteRange(firstDestinationIndex, startingCoordinates = null) {
  const estimate = { distanceKm: 0, durationMinutes: 0 };
  for (let destinationIndex = firstDestinationIndex; destinationIndex < destinations.length; destinationIndex += 1) {
    const destination = destinations[destinationIndex];
    const previousDestination = destinations[destinationIndex - 1];
    const start = destinationIndex === 0
      ? startingCoordinates
      : previousDestination && previousDestination.coordinates;
    if (!start) continue;

    const distanceKm = Math.round(calculateStraightLineDistance(start, destination.coordinates) * roadDistanceMultiplier);
    estimate.distanceKm += distanceKm;
    estimate.durationMinutes += Math.round(distanceKm / averageMotorbikeSpeed * 60);
  }
  return estimate;
}

function createSvgElement(tagName, attributes = {}) {
  const element = document.createElementNS("http://www.w3.org/2000/svg", tagName);
  Object.entries(attributes).forEach(([name, value]) => element.setAttribute(name, String(value)));
  return element;
}

function appendMapLabel(parent, name, x, y) {
  const words = name.split(/\s+/);
  const lines = [];
  let line = "";
  words.forEach((word) => {
    const nextLine = line ? `${line} ${word}` : word;
    if (nextLine.length > 13 && line) {
      lines.push(line);
      line = word;
    } else {
      line = nextLine;
    }
  });
  if (line) lines.push(line);

  const label = createSvgElement("text", {
    class: "map-point-label",
    x,
    y,
    "text-anchor": "middle",
  });
  lines.forEach((labelLine, index) => {
    const tspan = createSvgElement("tspan", { x, dy: index === 0 ? "0" : "13" });
    tspan.textContent = labelLine;
    label.append(tspan);
  });
  parent.append(label);
}

function getRouteMapPositions(nodeCount) {
  const left = 54;
  const right = 666;
  const top = 62;
  return Array.from({ length: nodeCount }, (_, nodeIndex) => {
    const rowIndex = Math.floor(nodeIndex / routeMapColumns);
    const columnIndex = nodeIndex % routeMapColumns;
    const itemsInRow = Math.min(routeMapColumns, nodeCount - rowIndex * routeMapColumns);
    const visualColumn = rowIndex % 2 === 0 ? columnIndex : itemsInRow - 1 - columnIndex;
    const x = itemsInRow === 1
      ? (left + right) / 2
      : left + visualColumn * (right - left) / (itemsInRow - 1);
    return { x, y: top + rowIndex * routeMapRowSpacing };
  });
}

function createSmoothPath(points) {
  if (!points.length) return "";
  let path = `M ${points[0].x} ${points[0].y}`;

  for (let index = 0; index < points.length - 1; index += 1) {
    const previous = points[index - 1] || points[index];
    const start = points[index];
    const end = points[index + 1];
    const next = points[index + 2] || end;
    const firstControl = {
      x: start.x + (end.x - previous.x) / 6,
      y: start.y + (end.y - previous.y) / 6,
    };
    const secondControl = {
      x: end.x - (next.x - start.x) / 6,
      y: end.y - (next.y - start.y) / 6,
    };
    path += ` C ${firstControl.x} ${firstControl.y} ${secondControl.x} ${secondControl.y} ${end.x} ${end.y}`;
  }

  return path;
}

function renderRouteMap(progressIndex) {
  const nodes = [
    {
      name: "Vị trí bạn",
      mapUrl: googleMapsDirectionsUrl(destinations[0], originCoordinates),
      isOrigin: true,
    },
    ...destinations,
  ];
  const routeMapPositions = getRouteMapPositions(nodes.length);
  const rowCount = Math.ceil(nodes.length / routeMapColumns);
  const mapHeight = routeMapPositions[routeMapPositions.length - 1].y + 60;
  routeMapSvg.setAttribute("viewBox", `0 0 720 ${Math.max(300, mapHeight)}`);
  routeMapSvg.setAttribute("aria-label", `Sơ đồ toàn bộ ${destinations.length} điểm đến, bấm vào ghim để mở Google Maps`);
  routeMapTag.textContent = `${destinations.length} ĐIỂM · BẤM GHIM MỞ MAPS`;
  simulationMap.style.setProperty("--route-map-extra-height", `${Math.max(0, rowCount - 3) * routeMapRowSpacing}px`);

  const currentNodeIndex = progressIndex + 1;
  const routePath = createSmoothPath(routeMapPositions);
  const progressPath = createSmoothPath(routeMapPositions.slice(0, currentNodeIndex + 1));
  const remainingPath = createSmoothPath(routeMapPositions.slice(currentNodeIndex));

  mapRouteShadow.setAttribute("d", routePath);
  mapRouteLine.setAttribute("d", remainingPath);
  mapProgressLine.setAttribute("d", progressPath);
  routeMapMarkers.replaceChildren();

  nodes.forEach((node, nodeIndex) => {
    const point = routeMapPositions[nodeIndex];
    const rowIndex = Math.floor(nodeIndex / 5);
    const labelY = rowIndex === 1 ? point.y - 20 : point.y + 25;
    const isCurrent = nodeIndex === currentNodeIndex;
    const isVisited = !node.isOrigin && visitedPlaces.has(node.id);
    const marker = createSvgElement("a", {
      class: `map-pin-link${isCurrent ? " is-current" : ""}${isVisited ? " is-visited" : ""}`,
      href: node.mapUrl,
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": node.isOrigin
        ? "Vị trí xuất phát: mở chỉ đường đến Long Hải trên Google Maps"
        : `${isVisited ? "Đã ghé: " : ""}Mở ${node.name} trên Google Maps`,
    });
    const title = createSvgElement("title");
    title.textContent = node.isOrigin ? "Vị trí xuất phát" : node.name;
    marker.append(title);

    if (isCurrent) {
      marker.append(createSvgElement("circle", {
        class: "map-current-halo",
        cx: point.x,
        cy: point.y,
        r: 19,
      }));
    } else if (isVisited) {
      marker.append(createSvgElement("circle", {
        class: "map-visited-halo",
        cx: point.x,
        cy: point.y,
        r: 15,
      }));
    }

    marker.append(createSvgElement("circle", {
      class: "map-node-circle",
      cx: point.x,
      cy: point.y,
      r: node.isOrigin ? 10 : 11,
    }));

    const number = createSvgElement("text", {
      class: "map-node-number",
      x: point.x,
      y: point.y + 4,
      "text-anchor": "middle",
    });
    number.textContent = node.isOrigin ? "●" : String(nodeIndex).padStart(2, "0");
    marker.append(number);
    appendMapLabel(marker, node.name, point.x, labelY);
    routeMapMarkers.append(marker);
  });
}

function renderRouteSimulation() {
  const progressIndex = getFurthestVisitedDestinationIndex();
  const totalEstimate = estimateRouteRange(0, originCoordinates);
  const remainingEstimate = estimateRouteRange(progressIndex + 1, progressIndex < 0 ? originCoordinates : null);
  const currentDestination = progressIndex >= 0 ? destinations[progressIndex] : null;
  const nextDestinationIndex = progressIndex + 1;
  const nextDestination = destinations[nextDestinationIndex];

  routeDistance.innerHTML = `${totalEstimate.distanceKm} <small>km</small>`;
  routeDuration.textContent = formatEstimatedDuration(totalEstimate.durationMinutes);
  routeRemainingDistance.innerHTML = `${remainingEstimate.distanceKm} <small>km</small>`;
  routeRemainingDuration.textContent = formatEstimatedDuration(remainingEstimate.durationMinutes);
  routeTotalDistanceLabel.textContent = originCoordinates
    ? "TỔNG QUÃNG ĐƯỜNG · TỪ GPS"
    : "TỔNG QUÃNG ĐƯỜNG · TỪ LONG HẢI";
  routeTotalDurationLabel.textContent = originCoordinates
    ? "TỔNG THỜI GIAN · TỪ GPS"
    : "TỔNG THỜI GIAN · TỪ LONG HẢI";
  routeRemainingDistanceLabel.textContent = currentDestination
    ? `QUÃNG ĐƯỜNG CÒN LẠI · TỪ ${currentDestination.name.toLocaleUpperCase("vi-VN")}`
    : originCoordinates
      ? "QUÃNG ĐƯỜNG CÒN LẠI · TỪ GPS"
      : "QUÃNG ĐƯỜNG CÒN LẠI · TỪ LONG HẢI";
  currentPositionLabel.textContent = currentDestination
    ? currentDestination.name
    : originCoordinates
      ? "Điểm xuất phát (GPS)"
      : "Điểm xuất phát";
  locateButton.hidden = originCoordinates !== null || progressIndex >= 0;

  if (nextDestination) {
    const nextStopStart = nextDestinationIndex === 0
      ? originCoordinates
      : destinations[nextDestinationIndex - 1].coordinates;
    nextStopName.textContent = nextDestination.name;
    nextStopEstimateMinutes = nextStopStart
      ? Math.round(
        Math.round(calculateStraightLineDistance(nextStopStart, nextDestination.coordinates) * roadDistanceMultiplier)
        / averageMotorbikeSpeed * 60,
      )
      : null;
    nextStopDuration.textContent = nextStopEstimateMinutes === null
      ? "Lấy GPS điểm xuất phát để ước tính"
      : `Khoảng ${nextStopEstimateMinutes} phút di chuyển`;
    nextStopCard.classList.remove("is-complete");

    const nextRouteUrl = nextDestinationIndex === 0
      ? googleMapsDirectionsUrl(nextDestination, originCoordinates)
      : routeDirections[nextDestinationIndex];
    realDirectionsLink.href = nextRouteUrl;
    realDirectionsLink.setAttribute("aria-label", `Mở chặng tiếp theo đến ${nextDestination.name} trên Google Maps`);
    nextLegLabel.textContent = `Tiếp theo: ${nextDestination.name}`;
    realDirectionsLink.hidden = false;
  } else {
    nextStopName.textContent = "Đã đến Bồng Sơn";
    nextStopDuration.textContent = "Hành trình đã hoàn thành";
    nextStopEstimateMinutes = null;
    nextStopCard.classList.add("is-complete");
    realDirectionsLink.hidden = true;
  }
  updateNextStopArrival(new Date());

  if (!nextDestination) {
    locationStatus.textContent = "Đã ghé điểm cuối Bồng Sơn. Hành trình đã hoàn thành.";
  } else if (currentDestination) {
    const totalStartNote = originCoordinates
      ? ""
      : " Tổng thời gian toàn tuyến đang tính từ Long Hải, chưa gồm chặng GPS ban đầu.";
    locationStatus.textContent = `Vị trí của bạn đang ở điểm đã ghé xa nhất: ${currentDestination.name}.${totalStartNote}`;
  } else if (originCoordinates) {
    locationStatus.textContent = "Đã lấy GPS điểm xuất phát; tổng thời gian có tính chặng GPS đến Long Hải. Đánh dấu điểm đã ghé để cập nhật vị trí và thời gian còn lại.";
  } else {
    locationStatus.textContent = "Đánh dấu điểm đã ghé để cập nhật vị trí và thời gian còn lại. Tổng tuyến tạm tính từ Long Hải; dùng GPS để cộng chặng xuất phát.";
  }

  renderRouteLegEstimates();
  renderRouteMap(progressIndex);
}

function locateAndEstimateRoute() {
  if (!navigator.geolocation) {
    locationStatus.textContent = "Trình duyệt này không hỗ trợ GPS. Tuyến vẫn được ước tính từ Long Hải.";
    return;
  }

  locateButton.disabled = true;
  locationStatus.textContent = "Đang lấy GPS cho điểm xuất phát…";
  navigator.geolocation.getCurrentPosition(
    (position) => {
      originCoordinates = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };
      renderRouteSimulation();
      locateButton.disabled = false;
    },
    (error) => {
      const errorMessages = {
        1: "Bạn chưa cấp quyền vị trí. Hãy cho phép truy cập vị trí rồi thử lại.",
        2: "Không xác định được vị trí hiện tại. Hãy kiểm tra GPS hoặc kết nối mạng.",
        3: "Lấy vị trí quá lâu. Hãy thử lại ở nơi có tín hiệu tốt hơn.",
      };
      locationStatus.textContent = errorMessages[error.code] || "Không lấy được vị trí. Vui lòng thử lại.";
      locateButton.disabled = false;
    },
    { enableHighAccuracy: true, timeout: 15000, maximumAge: 60000 },
  );
}

function matchesFilter(destination) {
  if (activeFilter === "unvisited") return !visitedPlaces.has(destination.id);
  if (activeFilter === "visited") return visitedPlaces.has(destination.id);
  return true;
}

function renderMemorySlots(destination) {
  const photos = destinationMemories.get(destination.id) || [];
  const canEdit = canEditTrip();
  const photoCount = photos.filter(Boolean).length;
  const slots = Array.from({ length: maxMemoryPhotos }, (_, photoIndex) => {
    const pendingPhoto = pendingMemoryUploads.get(`${destination.id}:${photoIndex}`);
    if (pendingPhoto) {
      return `
        <div class="memory-slot has-photo is-uploading">
          <img src="${getPhotoObjectUrl(destination.id, photoIndex, pendingPhoto)}" alt="Ảnh xem trước ${photoIndex + 1} tại ${destination.name}">
          <span class="memory-upload-progress">Đang tải…</span>
        </div>
      `;
    }

    const photo = photos[photoIndex];
    if (photo) {
      return `
        <div class="memory-slot has-photo">
          <img src="${getPhotoObjectUrl(destination.id, photoIndex, photo)}" alt="Kỷ niệm ${photoIndex + 1} tại ${destination.name}">
          ${canEdit ? `<button class="remove-memory" type="button" data-memory-remove-id="${destination.id}" data-memory-index="${photoIndex}" aria-label="Xóa ảnh kỷ niệm ${photoIndex + 1}">×</button>` : ""}
        </div>
      `;
    }

    if (!canEdit) return '<div class="memory-slot memory-slot-empty" aria-hidden="true"></div>';
    return `
      <label class="memory-slot memory-upload">
        <input type="file" accept="image/*" data-memory-upload-id="${destination.id}" data-memory-index="${photoIndex}" aria-label="Thêm ảnh kỷ niệm ${photoIndex + 1} tại ${destination.name}">
        <span class="memory-upload-icon" aria-hidden="true">+</span>
        <span>Thêm ảnh</span>
      </label>
    `;
  }).join("");
  const statusText = photoStorageError
    ? tripCloud.configured ? "Ảnh được chia sẻ qua kho cloud." : "Không thể mở kho ảnh trên thiết bị này."
    : tripCloud.configured ? "Ảnh được lưu và chia sẻ qua kho cloud." : "Ảnh lưu riêng trên thiết bị này.";

  return `
    <div class="destination-memories">
      <div class="memory-heading"><span>ẢNH KỶ NIỆM</span><span>${photoCount} / ${maxMemoryPhotos}</span></div>
      <div class="memory-grid">${slots}</div>
      <p class="memory-status" data-memory-status-id="${destination.id}" aria-live="polite">${statusText}</p>
    </div>
  `;
}

function renderDestinations(animatedDestinationId = null) {
  const searchTerm = normalizeText(destinationSearch.value.trim());
  const progressIndex = getFurthestVisitedDestinationIndex();
  const nextDestinationIndex = progressIndex + 1;
  const canEdit = canEditTrip();
  const visibleDestinations = destinations.filter((destination) => {
    const matchesSearch = normalizeText(`${destination.name} ${destination.place} ${destination.type}`).includes(searchTerm);
    return matchesFilter(destination) && matchesSearch;
  });

  resultSummary.textContent = searchTerm || activeFilter !== "all"
    ? `Hiển thị ${visibleDestinations.length} / ${destinations.length} địa điểm`
    : `${destinations.length} địa điểm`;

  if (!visibleDestinations.length) {
    destinationGrid.innerHTML = '<p class="empty-state">Không tìm thấy địa điểm phù hợp.</p>';
    return;
  }

  destinationGrid.innerHTML = visibleDestinations.map((destination) => {
    const isVisited = visitedPlaces.has(destination.id);
    const destinationIndex = destinations.indexOf(destination);
    const prerequisiteDestination = destinations[Math.max(0, nextDestinationIndex - 1)];
    const canCancel = canEdit && isVisited && destinationIndex === progressIndex;
    const animationClass = destination.id === animatedDestinationId ? " just-visited" : "";
    if (isVisited) {
      return `
        <article class="destination-item is-visited${animationClass}">
          <span class="destination-index" aria-hidden="true">${destination.day.replace("ĐIỂM ", "")}</span>
          <div class="destination-main">
            <div class="destination-meta">${destination.day}<span aria-hidden="true">·</span>${destination.type}</div>
            <h2>${destination.name}</h2>
            <p>${destination.place}</p>
            <span class="visited-badge">✓ ĐÃ GHÉ</span>
          </div>
          ${renderMemorySlots(destination)}
          <button class="cancel-visit" type="button" data-cancel-visited-id="${destination.id}" aria-label="${canCancel ? `Hủy đánh dấu ${destination.name} đã ghé` : canEdit ? "Chỉ có thể hủy điểm đã đánh dấu gần nhất" : "Chỉ chủ sở hữu đã đăng nhập mới có thể chỉnh sửa"}" ${canCancel ? "" : "disabled"}>${canCancel ? "Hủy đánh dấu" : canEdit ? "Điểm đã khóa theo thứ tự" : "Chỉ chủ sở hữu chỉnh sửa"}</button>
        </article>
      `;
    }

    const isUnlocked = destinationIndex === nextDestinationIndex;
    const canMark = isUnlocked && canEdit;
    return `
      <button class="destination-item destination-swipe${isUnlocked ? "" : " is-locked"}${canEdit ? "" : " is-readonly"}${animationClass}" type="button" data-swipe-id="${destination.id}" aria-label="${!canEdit ? "Chỉ chủ sở hữu đã đăng nhập mới có thể chỉnh sửa" : isUnlocked ? `Trượt hoặc nhấn để đánh dấu ${destination.name} đã ghé` : `Cần đánh dấu ${prerequisiteDestination.name} trước khi đánh dấu ${destination.name}`}" ${canMark ? "" : "disabled"}>
        <span class="destination-index" aria-hidden="true">${destination.day.replace("ĐIỂM ", "")}</span>
        <span class="destination-main">
          <span class="destination-meta">${destination.day}<span aria-hidden="true">·</span>${destination.type}</span>
          <span class="destination-title">${destination.name}</span>
          <span class="destination-place">${destination.place}</span>
        </span>
        <span class="destination-swipe-track" aria-hidden="true">
          <span class="destination-swipe-fill"></span>
          <span class="destination-swipe-label">${!canEdit ? "Chỉ chủ sở hữu có thể đánh dấu" : isUnlocked ? "Vuốt thẻ sang phải để đánh dấu" : `Đánh dấu ${prerequisiteDestination.name} trước`}</span>
          <span class="destination-swipe-thumb">${canMark ? "→" : "🔒"}</span>
        </span>
      </button>
    `;
  }).join("");

  destinationGrid.querySelectorAll("[data-swipe-id]").forEach((button) => {
    registerDestinationSwipe(button);
  });
  destinationGrid.querySelectorAll("[data-cancel-visited-id]").forEach((button) => {
    button.addEventListener("click", () => cancelVisitedPlace(button.dataset.cancelVisitedId));
  });
  destinationGrid.querySelectorAll("[data-memory-upload-id]").forEach((input) => {
    input.addEventListener("change", () => addMemoryPhoto(input));
  });
  destinationGrid.querySelectorAll("[data-memory-remove-id]").forEach((button) => {
    button.addEventListener("click", () => removeMemoryPhoto(button));
  });
}

function registerDestinationSwipe(button) {
  let gesture = null;
  const track = button.querySelector(".destination-swipe-track");

  button.addEventListener("pointerdown", (event) => {
    if (!event.isPrimary || (event.pointerType === "mouse" && event.button !== 0)) return;
    gesture = { startX: event.clientX, startY: event.clientY };
    button.classList.add("is-swiping");
    button.setPointerCapture(event.pointerId);
  });

  button.addEventListener("pointermove", (event) => {
    if (!gesture) return;
    const distanceX = event.clientX - gesture.startX;
    const distanceY = event.clientY - gesture.startY;
    if (Math.abs(distanceY) > 16 && Math.abs(distanceY) > Math.abs(distanceX)) {
      gesture = null;
      button.classList.remove("is-swiping");
      button.style.removeProperty("--swipe-offset");
      track.style.removeProperty("--swipe-progress");
      return;
    }

    const maxOffset = Math.max(0, track.clientWidth - 38);
    const offset = Math.min(maxOffset, Math.max(0, distanceX));
    button.style.setProperty("--swipe-offset", `${offset}px`);
    track.style.setProperty("--swipe-progress", `${maxOffset ? offset / maxOffset * 100 : 0}%`);
  });

  button.addEventListener("pointerup", (event) => {
    if (!gesture) return;
    const distanceX = event.clientX - gesture.startX;
    const distanceY = event.clientY - gesture.startY;
    const requiredDistance = Math.min(120, button.clientWidth * .42);
    gesture = null;
    if (distanceX >= requiredDistance && distanceX > Math.abs(distanceY)) {
      toggleVisitedPlace(button.dataset.swipeId);
      return;
    }
    button.classList.remove("is-swiping");
    button.style.removeProperty("--swipe-offset");
    track.style.removeProperty("--swipe-progress");
  });

  button.addEventListener("pointercancel", () => {
    gesture = null;
    button.classList.remove("is-swiping");
    button.style.removeProperty("--swipe-offset");
    track.style.removeProperty("--swipe-progress");
  });

  button.addEventListener("click", (event) => {
    if (event.detail === 0) toggleVisitedPlace(button.dataset.swipeId);
  });
}

async function toggleVisitedPlace(id) {
  const nextDestinationIndex = getFurthestVisitedDestinationIndex() + 1;
  if (visitedPlaces.has(id) || destinations[nextDestinationIndex]?.id !== id) {
    locationStatus.textContent = "Hãy đánh dấu các điểm theo đúng thứ tự của hành trình.";
    return;
  }
  if (!canEditTrip()) {
    locationStatus.textContent = "Chỉ chủ sở hữu đã đăng nhập mới có thể cập nhật lộ trình.";
    return;
  }
  const nextVisitedPlaces = new Set(visitedPlaces);
  nextVisitedPlaces.add(id);

  try {
    if (tripCloud.configured) {
      await tripCloud.saveVisitedIds([...nextVisitedPlaces]);
    } else {
      localStorage.setItem(visitedStorageKey, JSON.stringify([...nextVisitedPlaces]));
    }
    visitedPlaces = nextVisitedPlaces;
    if (tripCloud.configured) cacheCloudState();
    if (!destinationMemories.has(id)) destinationMemories.set(id, []);
    updateVisitedProgress();
    renderDestinations(id);
    renderRouteOverview();
    renderRouteSimulation();
  } catch (error) {
    console.warn("Could not save the visit status.", error);
    locationStatus.textContent = tripCloud.configured
      ? "Không thể đồng bộ trạng thái điểm đến. Hãy kiểm tra kết nối rồi thử lại."
      : "Không lưu được. Hãy kiểm tra cài đặt trình duyệt.";
  }
}

async function cancelVisitedPlace(id) {
  const progressIndex = getFurthestVisitedDestinationIndex();
  if (destinations[progressIndex]?.id !== id) return;
  if (!canEditTrip()) {
    locationStatus.textContent = "Chỉ chủ sở hữu đã đăng nhập mới có thể cập nhật lộ trình.";
    return;
  }

  const nextVisitedPlaces = new Set(visitedPlaces);
  nextVisitedPlaces.delete(id);
  let localPhotosRemoved = false;

  try {
    await photoStorageReady;
    if (tripCloud.configured) {
      await tripCloud.saveVisitedIds([...nextVisitedPlaces]);
      try {
        await tripCloud.deleteDestinationMemories(id);
      } catch (error) {
        await tripCloud.saveVisitedIds([...visitedPlaces]);
        throw error;
      }
      try {
        await deleteDestinationMemories(id);
        localPhotosRemoved = true;
      } catch (error) {
        console.error("Could not remove the local photo cache after cloud deletion.", error);
      }
    } else {
      localStorage.setItem(visitedStorageKey, JSON.stringify([...nextVisitedPlaces]));
      await deleteDestinationMemories(id);
      localPhotosRemoved = true;
    }
    revokePhotoObjectUrls(id);
    destinationMemories.delete(id);
    visitedPlaces = nextVisitedPlaces;
    if (tripCloud.configured) cacheCloudState();
    updateVisitedProgress();
    renderDestinations();
    renderRouteOverview();
    renderRouteSimulation();
    if (tripCloud.configured && !localPhotosRemoved) {
      locationStatus.textContent = "Điểm đã được hủy trên cloud, nhưng bản sao ảnh trên thiết bị chưa được xóa.";
    }
  } catch (error) {
    if (!tripCloud.configured) {
      try {
        localStorage.setItem(visitedStorageKey, JSON.stringify([...visitedPlaces]));
      } catch (rollbackError) {
        console.error("Could not restore visit status after cancelling.", rollbackError);
      }
    }
    console.error("Could not cancel the visit status and remove its photos.", error);
    locationStatus.textContent = tripCloud.configured
      ? "Không thể hủy điểm trên cloud. Hãy kiểm tra kết nối rồi thử lại."
      : "Không thể hủy lúc này; ảnh và trạng thái vẫn được giữ.";
  }
}

async function addMemoryPhoto(input) {
  const destinationId = input.dataset.memoryUploadId;
  const photoIndex = Number(input.dataset.memoryIndex);
  const file = input.files && input.files[0];
  if (!file) return;
  if (!canEditTrip()) {
    setMemoryStatus(destinationId, "Chỉ chủ sở hữu đã đăng nhập mới có thể thêm ảnh.");
    input.value = "";
    return;
  }
  if (!file.type.startsWith("image/")) {
    setMemoryStatus(destinationId, "Chỉ có thể thêm tệp hình ảnh.");
    input.value = "";
    return;
  }

  const photos = [...(destinationMemories.get(destinationId) || [])];
  if (photos.filter(Boolean).length >= maxMemoryPhotos || photos[photoIndex]) {
    setMemoryStatus(destinationId, "Mỗi điểm đến lưu tối đa 3 ảnh.");
    input.value = "";
    return;
  }
  const photo = { blob: file, name: file.name, type: file.type };
  const photoKey = `${destinationId}:${photoIndex}`;
  pendingMemoryUploads.set(photoKey, photo);
  renderDestinations();
  setMemoryStatus(destinationId, "Đang xem trước và lưu ảnh…");
  let localCacheError = false;

  try {
    await photoStorageReady;
    if (tripCloud.configured) {
      const uploadedPhoto = await tripCloud.uploadPhoto(destinationId, photoIndex, photo);
      photos[photoIndex] = { ...uploadedPhoto, blob: file };
      destinationMemories.set(destinationId, photos);
      try {
        await saveDestinationMemories(destinationId, photos);
      } catch (error) {
        console.error("Could not cache the uploaded photo locally.", error);
        localCacheError = true;
      }
    } else {
      photos[photoIndex] = photo;
      await saveDestinationMemories(destinationId, photos);
    }
    pendingMemoryUploads.delete(photoKey);
    destinationMemories.set(destinationId, photos);
    renderDestinations();
    setMemoryStatus(destinationId, tripCloud.configured
      ? localCacheError
        ? "Ảnh đã lên cloud nhưng chưa lưu được bản sao trên thiết bị."
        : "Ảnh đã được tải lên và chia sẻ qua cloud."
      : "Đã lưu ảnh kỷ niệm trên thiết bị này.");
  } catch (error) {
    console.error("Could not save the memory photo.", error);
    pendingMemoryUploads.delete(photoKey);
    const previewUrl = photoObjectUrls.get(photoKey);
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
      photoObjectUrls.delete(photoKey);
    }
    renderDestinations();
    setMemoryStatus(destinationId, error.message || (tripCloud.configured
      ? "Không tải được ảnh lên cloud. Hãy kiểm tra kết nối và dung lượng."
      : "Không lưu được ảnh. Hãy kiểm tra dung lượng thiết bị."));
    input.value = "";
  }
}

async function removeMemoryPhoto(button) {
  const destinationId = button.dataset.memoryRemoveId;
  const photoIndex = Number(button.dataset.memoryIndex);
  if (!canEditTrip()) return;
  const photos = [...(destinationMemories.get(destinationId) || [])];
  photos[photoIndex] = null;
  let localCacheError = false;

  try {
    await photoStorageReady;
    if (tripCloud.configured) {
      await tripCloud.deleteMemory(destinationId, photoIndex);
      try {
        await saveDestinationMemories(destinationId, photos);
      } catch (error) {
        console.error("Could not update the local photo cache after cloud deletion.", error);
        localCacheError = true;
      }
    } else {
      await saveDestinationMemories(destinationId, photos);
    }
    revokePhotoObjectUrls(destinationId);
    destinationMemories.set(destinationId, photos);
    renderDestinations();
    if (localCacheError) {
      setMemoryStatus(destinationId, "Ảnh đã xóa trên cloud nhưng chưa xóa được bản sao trên thiết bị.");
    }
  } catch (error) {
    console.error("Could not remove the memory photo.", error);
    setMemoryStatus(destinationId, "Không thể xóa ảnh lúc này.");
  }
}

function setMemoryStatus(destinationId, message) {
  const status = [...destinationGrid.querySelectorAll("[data-memory-status-id]")]
    .find((element) => element.dataset.memoryStatusId === destinationId);
  if (status) status.textContent = message;
}

function loadExpenses() {
  try {
    const stored = JSON.parse(localStorage.getItem(expenseStorageKey) || "[]");
    if (!Array.isArray(stored)) throw new Error("Saved expense list is not an array.");
    return stored.filter(isValidExpense);
  } catch (error) {
    console.warn("Could not read the saved expenses.", error);
    return [];
  }
}

function isValidExpense(expense) {
  return Boolean(
    expense
    && typeof expense.id === "string"
    && /^[a-z0-9_-]{1,80}$/i.test(expense.id)
    && Number.isSafeInteger(expense.amount)
    && expense.amount > 0
    && Object.prototype.hasOwnProperty.call(expenseCategories, expense.category)
    && !Number.isNaN(Date.parse(expense.timestamp)),
  );
}

const vndFormatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
  maximumFractionDigits: 0,
});
const expenseDateFormatter = new Intl.DateTimeFormat("vi-VN", {
  timeZone: "Asia/Ho_Chi_Minh",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
});

function renderExpenseHistory() {
  const canEdit = canEditTrip();
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  expenseTotal.textContent = vndFormatter.format(total);
  expenseCount.textContent = `${expenses.length} khoản chi`;
  expenseHistory.innerHTML = expenses.length
    ? expenses.map((expense) => {
      const category = expenseCategories[expense.category];
      const expenseDate = new Date(expense.timestamp);
      return `
        <div class="expense-history-swipe${expense.id === openExpenseId ? " is-open" : ""}" data-expense-id="${expense.id}">
          ${canEdit ? `
            <button class="expense-delete-action" type="button" data-delete-expense-id="${expense.id}" aria-label="Xóa khoản ${category.label}, ${vndFormatter.format(expense.amount)}" aria-expanded="${expense.id === openExpenseId}">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 7h16M9 7V4h6v3m3 0-1 13H7L6 7m4 4v5m4-5v5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>Xóa</span>
            </button>
          ` : ""}
          <article class="expense-history-item ${expense.category}">
            <span class="expense-history-icon" aria-hidden="true">${category.icon}</span>
            <span class="expense-history-details">
              <span class="expense-history-category">${category.label}</span>
              <time class="expense-history-date" datetime="${expenseDate.toISOString()}">${expenseDateFormatter.format(expenseDate)}</time>
            </span>
            <strong class="expense-history-amount">${vndFormatter.format(expense.amount)}</strong>
          </article>
        </div>
      `;
    }).join("")
    : '<p class="expense-empty">Chưa có khoản chi nào được ghi lại.</p>';

  if (canEdit) expenseHistory.querySelectorAll(".expense-history-swipe").forEach(registerExpenseSwipe);
  expenseHistory.querySelectorAll("[data-delete-expense-id]").forEach((button) => {
    button.addEventListener("click", () => deleteExpense(button.dataset.deleteExpenseId));
  });
}

function registerExpenseSwipe(container) {
  const revealWidth = 78;
  let gesture = null;

  container.addEventListener("focusin", (event) => {
    if (event.target.matches(".expense-delete-action")) {
      setOpenExpense(container.dataset.expenseId);
    }
  });

  container.addEventListener("pointerdown", (event) => {
    if (!event.isPrimary || event.target.closest(".expense-delete-action")) return;
    gesture = {
      startX: event.clientX,
      startY: event.clientY,
      initialOffset: container.classList.contains("is-open") ? revealWidth : 0,
    };
    container.classList.add("is-dragging");
    container.setPointerCapture(event.pointerId);
  });

  container.addEventListener("pointermove", (event) => {
    if (!gesture) return;
    const distanceX = event.clientX - gesture.startX;
    const distanceY = event.clientY - gesture.startY;
    if (Math.abs(distanceY) > 16 && Math.abs(distanceY) > Math.abs(distanceX)) {
      gesture = null;
      container.classList.remove("is-dragging");
      container.style.removeProperty("--expense-offset");
      return;
    }

    const offset = Math.min(revealWidth, Math.max(0, gesture.initialOffset + distanceX));
    container.style.setProperty("--expense-offset", `${offset}px`);
  });

  container.addEventListener("pointerup", (event) => {
    if (!gesture) return;
    const distanceX = event.clientX - gesture.startX;
    const distanceY = event.clientY - gesture.startY;
    const offset = Math.min(revealWidth, Math.max(0, gesture.initialOffset + distanceX));
    const shouldOpen = offset >= revealWidth * .5 && Math.abs(distanceX) > Math.abs(distanceY);
    gesture = null;
    setOpenExpense(shouldOpen ? container.dataset.expenseId : null);
  });

  container.addEventListener("pointercancel", () => {
    gesture = null;
    container.classList.remove("is-dragging");
    container.style.removeProperty("--expense-offset");
  });
}

function setOpenExpense(expenseId) {
  openExpenseId = expenseId;
  expenseHistory.querySelectorAll(".expense-history-swipe").forEach((container) => {
    const isOpen = container.dataset.expenseId === openExpenseId;
    container.classList.toggle("is-open", isOpen);
    container.classList.remove("is-dragging");
    container.style.removeProperty("--expense-offset");
    const deleteAction = container.querySelector(".expense-delete-action");
    if (deleteAction) deleteAction.setAttribute("aria-expanded", String(isOpen));
  });
}

async function deleteExpense(id) {
  if (!canEditTrip()) {
    expenseFormStatus.textContent = "Chỉ chủ sở hữu đã đăng nhập mới có thể xóa khoản chi.";
    return;
  }
  const nextExpenses = expenses.filter((expense) => expense.id !== id);
  if (nextExpenses.length === expenses.length) return;

  try {
    if (tripCloud.configured) {
      await tripCloud.deleteExpense(id);
    } else {
      localStorage.setItem(expenseStorageKey, JSON.stringify(nextExpenses));
    }
  } catch (error) {
    console.error("Could not delete the expense.", error);
    expenseFormStatus.textContent = tripCloud.configured
      ? "Không thể xóa khoản chi trên cloud. Hãy thử lại."
      : "Không xóa được khoản chi. Hãy thử lại.";
    return;
  }

  expenses = nextExpenses;
  if (tripCloud.configured) cacheCloudState();
  openExpenseId = null;
  renderExpenseHistory();
  expenseFormStatus.textContent = "Khoản chi đã được xóa.";
}

function updateExpenseSubmitState() {
  const amount = Number(expenseAmountInput.value);
  expenseSubmit.disabled = !selectedExpenseCategory || !Number.isSafeInteger(amount) || amount <= 0;
}

function selectExpenseCategory(button) {
  selectedExpenseCategory = button.dataset.expenseCategory;
  expenseCategoryButtons.forEach((categoryButton) => {
    categoryButton.setAttribute(
      "aria-pressed",
      String(categoryButton === button),
    );
  });
  expenseFormStatus.textContent = `${expenseCategories[selectedExpenseCategory].label} đã chọn.`;
  updateExpenseSubmitState();
}

async function saveExpense(event) {
  event.preventDefault();
  if (!canEditTrip()) {
    expenseFormStatus.textContent = "Chỉ chủ sở hữu đã đăng nhập mới có thể thêm khoản chi.";
    return;
  }
  const amount = Number(expenseAmountInput.value);
  if (!selectedExpenseCategory || !Number.isSafeInteger(amount) || amount <= 0) {
    expenseFormStatus.textContent = "Chọn danh mục và nhập số tiền hợp lệ trước khi lưu.";
    updateExpenseSubmitState();
    return;
  }

  const nextExpenses = [
    { id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`, amount, category: selectedExpenseCategory, timestamp: new Date().toISOString() },
    ...expenses,
  ];
  try {
    if (tripCloud.configured) {
      await tripCloud.saveExpense(nextExpenses[0]);
    } else {
      localStorage.setItem(expenseStorageKey, JSON.stringify(nextExpenses));
    }
    expenses = nextExpenses;
    if (tripCloud.configured) cacheCloudState();
    renderExpenseHistory();
    expenseForm.reset();
    selectedExpenseCategory = null;
    expenseCategoryButtons.forEach((button) => button.setAttribute("aria-pressed", "false"));
    expenseFormStatus.textContent = tripCloud.configured
      ? "Khoản chi đã được đồng bộ lên cloud."
      : "Khoản chi đã được lưu trên thiết bị này.";
    updateExpenseSubmitState();
  } catch (error) {
    console.error("Could not save the expense.", error);
    expenseFormStatus.textContent = tripCloud.configured
      ? "Không thể lưu khoản chi lên cloud. Hãy kiểm tra kết nối."
      : "Không lưu được khoản chi. Hãy kiểm tra dung lượng trình duyệt.";
  }
}

function setTabMenuOpen(isOpen) {
  tabMenuOptions.hidden = !isOpen;
  tabMenuTrigger.setAttribute("aria-expanded", String(isOpen));
}

function setActiveTab(tab) {
  const isExpenseTab = tab === "expense";
  routeTabPanel.hidden = isExpenseTab;
  expenseTabPanel.hidden = !isExpenseTab;
  document.body.classList.toggle("expenses-active", isExpenseTab);
  tabMenuOptionButtons.forEach((button) => {
    if (button.dataset.tabTarget === tab) button.setAttribute("aria-current", "page");
    else button.removeAttribute("aria-current");
  });
  setTabMenuOpen(false);
}

function beginTabMenuHold(event) {
  if (!event.isPrimary) return;
  menuLongPressed = false;
  window.clearTimeout(menuHoldTimer);
  menuHoldTimer = window.setTimeout(() => {
    menuLongPressed = true;
    setTabMenuOpen(true);
  }, 450);
}

function endTabMenuHold() {
  window.clearTimeout(menuHoldTimer);
  menuHoldTimer = null;
}

function toggleTabMenu(event) {
  if (menuLongPressed) {
    menuLongPressed = false;
    event.preventDefault();
    return;
  }
  setTabMenuOpen(tabMenuOptions.hidden);
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });
    activeFilter = button.dataset.filter;
    renderDestinations();
  });
});

destinationSearch.addEventListener("input", renderDestinations);
locateButton.addEventListener("click", locateAndEstimateRoute);
expenseCategoryButtons.forEach((button) => {
  button.addEventListener("click", () => selectExpenseCategory(button));
});
expenseAmountInput.addEventListener("input", updateExpenseSubmitState);
expenseForm.addEventListener("submit", saveExpense);
tabMenuTrigger.addEventListener("pointerdown", beginTabMenuHold);
tabMenuTrigger.addEventListener("pointerup", endTabMenuHold);
tabMenuTrigger.addEventListener("pointercancel", endTabMenuHold);
tabMenuTrigger.addEventListener("click", toggleTabMenu);
tabMenuOptionButtons.forEach((button) => {
  button.addEventListener("click", () => setActiveTab(button.dataset.tabTarget));
});
document.addEventListener("pointerdown", (event) => {
  if (!floatingTabMenu.contains(event.target)) setTabMenuOpen(false);
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setTabMenuOpen(false);
});

cloudLoginButton.addEventListener("click", () => {
  cloudLoginStatus.textContent = "";
  cloudLoginDialog.showModal();
});
document.querySelector("#cloudLoginCancel").addEventListener("click", () => cloudLoginDialog.close());
cloudLoginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  cloudLoginSubmit.disabled = true;
  cloudLoginStatus.textContent = "Đang đăng nhập và đồng bộ dữ liệu…";
  try {
    const snapshot = await tripCloud.signIn(
      document.querySelector("#cloudLoginEmail").value.trim(),
      document.querySelector("#cloudLoginPassword").value,
      getSnapshotForOwnerImport(),
    );
    applyCloudSnapshot(snapshot);
    cloudLoginForm.reset();
    cloudLoginDialog.close();
  } catch (error) {
    console.error("Could not sign in to the trip cloud.", error);
    cloudLoginStatus.textContent = error.message || "Không thể đăng nhập. Hãy kiểm tra tài khoản và thử lại.";
  } finally {
    cloudLoginSubmit.disabled = false;
  }
});
cloudLogoutButton.addEventListener("click", async () => {
  cloudLogoutButton.disabled = true;
  try {
    const snapshot = await tripCloud.signOut(getLocalCloudSnapshot());
    applyCloudSnapshot(snapshot);
  } catch (error) {
    console.error("Could not sign out from the trip cloud.", error);
    cloudError = error.message || "Không thể đăng xuất.";
    updateCloudUi();
  } finally {
    cloudLogoutButton.disabled = false;
  }
});
cloudShareButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(window.location.href);
    cloudSyncStatus.textContent = "Đã sao chép liên kết xem lộ trình, chi phí và ảnh.";
  } catch (error) {
    console.error("Could not copy the shared trip link.", error);
    cloudSyncStatus.textContent = "Không sao chép được. Hãy chép địa chỉ trang từ thanh trình duyệt.";
  }
});

async function initializeApplication() {
  updateCloudUi();
  photoStorageReady = initializeMemoryStorage();
  if (!tripCloud.configured) {
    renderApplicationState();
    await photoStorageReady;
    renderDestinations();
    return;
  }

  document.body.classList.add("cloud-loading");
  cloudSyncStatus.textContent = "Đang kết nối kho dữ liệu dùng chung…";
  try {
    await photoStorageReady;
    localPreCloudSnapshot = getLocalCloudSnapshot();
    const snapshot = await tripCloud.initialize(localPreCloudSnapshot);
    applyCloudSnapshot(snapshot);
  } catch (error) {
    console.error("Could not initialize the shared trip cloud.", error);
    cloudError = error.message || "Không thể kết nối kho dữ liệu.";
    cloudReady = false;
    cloudOwner = false;
    updateCloudUi();
    renderApplicationState();
  } finally {
    document.body.classList.remove("cloud-loading");
  }
}

updateCurrentTime();
updateExpenseSubmitState();
window.setInterval(updateCurrentTime, 1000);
initializeApplication();
