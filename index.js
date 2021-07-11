fetch('./assets/data.json')
	.then((response) => response.json())
	.then((json) => {
		let htmlContent = '';

		json.forEach((value, index) => {
			if (index == 7 || index == 3) value.field2 = 'NO_MALICIOUS';
			htmlContent += tableRowTemplate(value);
		});
		dataTable.innerHTML = htmlContent;
	});

const sideBarTemplate = `
 <i class="fas fa-bars" onclick="minimizeSideBar()"></i>
        <div class="header">
            <img src="./assets/img/download.jpg" />
            <p>ABDERRAOUF CHAREF </p>
            <span>fa_charef@esi.dz</span>
        </div>
        <div class="items">
            <a class="item" href="./index.html">
                <i class="fas fa-vector-square"></i>
                <p>Vectorization</p>
            </a>
            <a class="item" href="./page_3.html">
                <i class="fas fa-cogs"></i>
                <p>Parametre d'apprentissage</p>
            </a>
            <a class="item" href="./page_2.html">
                <i class="fas fa-chart-bar"></i>
                <p>Evaluation</p>
            </a>
        </div>
`;

const navBarTemplate = `
    <img src="./assets/img/download.jpg" alt="" />
        <h2>LMCS</h3>
        <div class="actions">
            <i class="far fa-user"></i>
            <i class="far fa-bell"></i>
            <i class="far fa-envelope"></i>
             <button class="button">Logout</button>
        </div>
        `;

const tableRowTemplate = (value) => {
	return `
        <div class="row ${value.field1 % 2 == 0 ? 'pair' : 'impair'}" >
            <div class="col col-1">${value.field1}</div>
            <div class="col col-9">
                ${value.field4}
            </div>
            <div class="col col-2">${value.field2}</div>
        </div>
    `;
};

const sideBar = document.getElementById('sideBar');
const navBar = document.getElementById('navBar');

const dataTable = document.getElementById('dataTable');
const dialog = document.getElementById('dialogId');
sideBar.innerHTML = sideBarTemplate;
navBar.innerHTML = navBarTemplate;
const pageHolder = document.getElementById('pageHolder');
let isMinimized = false;
minimizeSideBar();
function minimizeSideBar() {
	if (isMinimized) {
		sideBar.classList.remove('minimized');
		sideBar.classList.add('maximized');
		pageHolder.style.marginLeft = '240px';
	} else {
		sideBar.classList.remove('maximized');
		sideBar.classList.add('minimized');
		pageHolder.style.marginLeft = '90px';
	}

	isMinimized = !isMinimized;
}

function openLoadingDialog() {
	dialog.style.display = 'flex';
	setTimeout(() => {
		let htmlContent = '';
		data_2.forEach((data, index) => {
			htmlContent += tableRowTemplate({
				field2: index == 7 || index == 3 ? '0' : '1',
				field4: data,
				field1: index + 1,
			});
		});
		dataTable.innerHTML = htmlContent;
		caption.style.cssText = 'display: block';
		dialog.style.display = 'none';
	}, 1000);
}

function goToResult() {
	location.href = 'page_2.html';
}

const data_2 = [
	`[0.0,         0.0,         0.0,         0.0,         0.0,         0.
 0.0,         0.0,         0.27869724 0.0,         0.0,         0.
 0.0,         0.0,         0.0,         0.0,         0.0,         0.
 0.0,         0.0,         0.0,         0.0,         0.27869724 0.
 0.0,         0.0,         0.0,         0.0,         0.0,         0.
 0.0,         0.0,         0.0,         0.0,         0.0,         0.
 0.0,         0.0,         0.0,         0.0,         0.0,         0.
 0.0,         0.29694939 0.0,         0.0,         0.0,         0.
 0.0,         0.0,         0.55739448 0.37443137 0.0,         0.
 0.0,         0.0,         0.0,         0.34278318 0.0,         0.29694939
 0.0,         0.0,         0.31608551 0.0,         0.0,        ]`,
	`[0.0,         0.0,         0.0,         0.0,         0.0,         0.
 0.0,         0.0,         0.27869724 0.0,         0.0,         0.
 0.0,         0.0,         0.0,         0.0,         0.0,         0.
 0.0,         0.0,         0.0,         0.0,         0.27869724 0.
 0.0,         0.0,         0.0,         0.0,         0.0,         0.
 0.0,         0.0,         0.0,         0.0,         0.0,         0.
 0.0,         0.0,         0.0,         0.0,         0.0,         0.
 0.0,         0.29694939 0.0,         0.0,         0.0,         0.
 0.0,         0.0,         0.55739448 0.37443137 0.0,         0.
 0.0,         0.0,         0.0,         0.34278318 0.0,         0.29694939
 0.0,         0.0,         0.31608551 0.0,         0.0,        ]`,
	`[0.0,         0.0,         0.0,         0.0,         0.0,         0.
 0.0,         0.0,         0.27869724 0.0,         0.0,         0.
 0.0,         0.0,         0.0,         0.0,         0.0,         0.
 0.0,         0.0,         0.0,         0.0,         0.27869724 0.
 0.0,         0.0,         0.0,         0.0,         0.0,         0.
 0.0,         0.0,         0.0,         0.0,         0.0,         0.
 0.0,         0.0,         0.0,         0.0,         0.0,         0.
 0.0,         0.29694939 0.0,         0.0,         0.0,         0.
 0.0,         0.0,         0.55739448 0.37443137 0.0,         0.
 0.0,         0.0,         0.0,         0.34278318 0.0,         0.29694939
 0.0,         0.0,         0.31608551 0.0,         0.0,        ]`,
	`[0.0,         0.0,         0.0,         0.0,         0.0,         0.
 0.30142321 0.0,         0.0,         0.30142321 0.30142321 0.30142321
 0.30142321 0.30142321 0.30239129 0.0,         0.0,         0.
 0.0,         0.0,         0.0,         0.0,         0.0,         0.
 0.0,         0.0,         0.0,         0.0,         0.30142321 0.
 0.0,         0.0,         0.0,         0.0,         0.0,         0.
 0.0,         0.0,         0.0,         0.0,         0.0,         0.
 0.0,         0.0,         0.0,         0.0,         0.0,         0.30142321
 0.0,         0.0,         0.0,         0.0,         0.0,         0.
 0.0,         0.0,         0.0,         0.0,         0.0,         0.
 0.0,         0.30142321 0.0,         0.0,         0.30142321]`,
	`[0. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0.
 0. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0.
 0. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0.]`,
	`[0.0,         0.0,         0.0,         0.0,         0.0,         0.
 0.0,         0.0,         0.11414679 0.0,         0.0,         0.
 0.0,         0.0,         0.0,         0.0,         0.0,         0.
 0.0,         0.1156394  0.1156394  0.0,         0.11414679 0.
 0.0,         0.0,         0.0,         0.0,         0.0,         0.1156394
 0.0,         0.0,         0.0,         0.0,         0.0,         0.
 0.0,         0.0,         0.0,         0.1156394  0.0,         0.
 0.0,         0.12162237 0.1156394  0.31106959 0.0,         0.
 0.0,         0.0,         0.22829358 0.15335688 0.0,         0.1156394
 0.0,         0.0,         0.0,         0.14039464 0.0,         0.12162237
 0.8094758  0.0,         0.12946    0.0,         0.0,        ]`,
	`[0.0,         0.0,         0.0,         0.0,         0.0,         0.
 0.0,         0.0,         0.11414679 0.0,         0.0,         0.
 0.0,         0.0,         0.0,         0.0,         0.0,         0.
 0.0,         0.1156394  0.1156394  0.0,         0.11414679 0.
 0.0,         0.0,         0.0,         0.0,         0.0,         0.1156394
 0.0,         0.0,         0.0,         0.0,         0.0,         0.
 0.0,         0.0,         0.0,         0.1156394  0.0,         0.
 0.0,         0.12162237 0.1156394  0.31106959 0.0,         0.
 0.0,         0.0,         0.22829358 0.15335688 0.0,         0.1156394
 0.0,         0.0,         0.0,         0.14039464 0.0,         0.12162237
 0.8094758  0.0,         0.12946    0.0,         0.0,        ]
`,
	`
[0.0,         0.0,         0.0,         0.0,         0.19320995 0.
 0.0,         0.0,         0.15152637 0.0,         0.0,         0.
 0.0,         0.0,         0.0,         0.0,         0.0,         0.
 0.0,         0.15350777 0.15350777 0.17632769 0.15152637 0.17820944
 0.19085949 0.17632769 0.17820944 0.0,         0.0,         0.15350777
 0.19320995 0.19320995 0.19320995 0.19320995 0.19320995 0.
 0.0,         0.19320995 0.19320995 0.15350777 0.19320995 0.19320995
 0.19085949 0.16144998 0.15350777 0.0,         0.0,         0.
 0.0,         0.17632769 0.15152637 0.0,         0.19085949 0.15350777
 0.19320995 0.0,         0.0,         0.0,         0.19320995 0.16144998
 0.15350777 0.0,         0.0,         0.0,         0.0,        ]`,
	`[0.0,         0.0,         0.0,         0.0,         0.19320995 0.
 0.0,         0.0,         0.15152637 0.0,         0.0,         0.
 0.0,         0.0,         0.0,         0.0,         0.0,         0.
 0.0,         0.15350777 0.15350777 0.17632769 0.15152637 0.17820944
 0.19085949 0.17632769 0.17820944 0.0,         0.0,         0.15350777
 0.19320995 0.19320995 0.19320995 0.19320995 0.19320995 0.
 0.0,         0.19320995 0.19320995 0.15350777 0.19320995 0.19320995
 0.19085949 0.16144998 0.15350777 0.0,         0.0,         0.
 0.0,         0.17632769 0.15152637 0.0,         0.19085949 0.15350777
 0.19320995 0.0,         0.0,         0.0,         0.19320995 0.16144998
 0.15350777 0.0,         0.0,         0.0,         0.0,        ]`,
	`[0.0,         0.0,         0.0,         0.0,         0.0,         0.
 0.0,         0.0,         0.11414679 0.0,         0.0,         0.
 0.0,         0.0,         0.0,         0.0,         0.0,         0.
 0.0,         0.1156394  0.1156394  0.0,         0.11414679 0.
 0.0,         0.0,         0.0,         0.0,         0.0,         0.1156394
 0.0,         0.0,         0.0,         0.0,         0.0,         0.
 0.0,         0.0,         0.0,         0.1156394  0.0,         0.
 0.0,         0.12162237 0.1156394  0.31106959 0.0,         0.
 0.0,         0.0,         0.22829358 0.15335688 0.0,         0.1156394
 0.0,         0.0,         0.0,         0.14039464 0.0,         0.12162237
 0.8094758  0.0,         0.12946    0.0,         0.0,        ]`,
];
