import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func509 implements IFuncOrigin {
	id = 509;
	name = '进入式神录';
	desc = '从不同页面进入式神录';
	operator: IFuncOperatorOrigin[] = [
		{   // 庭院_式神录
			desc: [
				1280, 720,
				[
					[right, 1095, 616, 0xbc172d],
					[right, 1146, 616, 0xeab24e],
					[right, 1130, 619, 0xe1d6d3],
					[right, 1105, 635, 0xdbe6f2],
				]
			],
			oper: [
				[right, 1280, 720, 1106, 623, 1153, 653, 1200]	// 点击式神录
			]
		}, {
			// 庭院_式神录，另外一种图标
			desc: [1280, 720,
				[
					[right, 1223, 662, 0xdbcbc7],
					[right, 1155, 41, 0xd7b188],
					[center, 451, 631, 0xe8e4e1],
					[center, 673, 651, 0xdb8b3f],
				]
			],
			oper: [
				[right, 1280, 720, 1106, 623, 1153, 653, 1200]	// 点击式神录
			]
		}, {
			// 庭院已打开菜单，另另外一种图标
			desc: [
				1280, 720,
				[
					[right, 1223, 658, 0xdac9c4],
					[right, 1155, 41, 0xd6b187],
					[center, 451, 631, 0xe6e3e1],
					[center, 683, 657, 0xda6b29],
				]
			],
			oper: [
				[right, 1280, 720, 1106, 623, 1153, 653, 1200]	// 点击式神录
			]
		},
		{   // 检测是否为式神录
			desc: [
				1280, 720,
				[
					[left, 34, 27, 0xf7ebae],
					[left, 231, 10, 0x302118],
					[left, 164, 38, 0x48332c],
					[left, 252, 90, 0x594641],
					[left, 307, 94, 0x604c48],
					[center, 405, 97, 0x5c4a48],
					[center, 483, 98, 0x5c4946],
					[center, 493, 687, 0x43322a],
					[left, 29, 673, 0x413028],
				]
			]
		},
		{
			desc:	//	道馆
				[
					1280, 720,
					[
						[right, 1024, 620, 0xe0d0d0],
						[right, 1000, 650, 0xd5c3c0],
						[right, 1004, 664, 0x493a38],
						[left, 182, 37, 0xd5c4a3],
						[left, 109, 24, 0xd7c5a2],
						[left, 47, 25, 0xd7c5a2],
						[right, 1043, 616, 0xebb555],
					]
				],
			oper: [
				[right, 1280, 720, 995, 601, 1056, 663, 1200]	//	点击_式神
			]
		},
		{
			desc: //	狩猎
				[
					1280, 720,
					[
						[left, 47, 31, 0xd7c5a2],
						[left, 108, 24, 0xd7c5a2],
						[left, 181, 23, 0xd6c5a4],
						[center, 930, 659, 0xe3d8d8],
						[center, 940, 679, 0x493a38],
						[right, 984, 621, 0xebb552],
					]
				],
			oper: [
				[center, 1280, 720, 922, 628, 993, 681, 1200]	//	点击_式神
			]
		},
		{
			desc:	//	检测_阴门
				[
					1280, 720,
					[
						[left, 125, 56, 0x493624],
						[right, 1124, 56, 0x493624],
						[right, 1208, 76, 0x632942],
						[right, 1194, 397, 0x180a28],
						[right, 1137, 634, 0xc1b7ac],
						[center, 330, 615, 0xf4b25f],
						[center, 454, 630, 0xf4b25f],
						[left, 130, 646, 0x9a8f83],
					]
				],
			oper: [
				[left, 1280, 720, 145, 601, 190, 646, 1200]	//	点击式神按钮
			]
		},
		{
			desc: //    检测_狭间
				[
					1280, 720,
					[
						[right, 1165, 597, 0xd5bfc2],
						[right, 1155, 659, 0xd9c3c5],
						[right, 1168, 491, 0xddd3c4],
						[center, 476, 412, 0x53170f],
						[right, 1016, 111, 0xe8d4cf],
						[center, 547, 582, 0x840517],
					]
				],
			oper: [
				[right, 1280, 720, 1135, 456, 1182, 498, 1200]    //  点击式神按钮
			]
		},
		{	//	检测_首领
			desc:
				[
					1280, 720,
					[
						[left, 182, 37, 0xd5c4a3],
						[left, 108, 26, 0xd7c5a2],
						[left, 47, 28, 0xd7c5a2],
						[left, 232, 139, 0x583716],
						[left, 76, 550, 0x322219],
						[right, 1039, 648, 0xd3c3bd],
						[center, 872, 606, 0x493a38],
						[center, 727, 611, 0xdfc7ac],
					]
				],
			oper: [
				[right, 1280, 720, 1008, 600, 1081, 671, 1200]	//	点击式神按钮
			]
		}, {// 庭院未打开菜单

			desc: [1280, 720,
				[[right, 1211, 606, 0x885f46],
				[right, 1205, 624, 0x987777],
				[right, 1208, 646, 0xaf4949],
				[right, 1175, 680, 0xb08e7d]]
			],
			oper: [
				[right, 1280, 720, 1168, 592, 1230, 690, 1000]
			]
		}, {// 突破界面
			desc: [
				1280, 720,
				[
					[center, 171, 104, 0x4a3624],
					[center, 564, 89, 0x5e4735],
					[center, 718, 92, 0x583716],
					[center, 728, 86, 0xdebc56],
					[center, 1210, 130, 0xebdac9],
					[center, 1076, 104, 0x4d3826],
				]
			]
		}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		if (thisScript.global.change_shikigami_flag) {
			if (thisScript.oper({
				name: '是否为式神录',
				operator: [thisOperator[3], thisOperator[10]]
			})) {
				thisScript.global.change_shikigami_flag = false;
			}

			if (thisScript.oper({
				name: '庭院进入式神录',
				operator: [thisOperator[0], thisOperator[1], thisOperator[2], thisOperator[4], thisOperator[5], thisOperator[6], thisOperator[7], thisOperator[9]]
			})) {
				return true;
			}
		} else {
			return false;
		}
		return false;
	}
}
