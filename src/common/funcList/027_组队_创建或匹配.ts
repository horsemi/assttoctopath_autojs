import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func027 implements IFuncOrigin {
	id = 27;
	name = '组队_创建或匹配';
	desc = '在庭院中点击下方的组队按钮后点击创建或排队按钮';
	operator: IFuncOperatorOrigin[] = [{ // 妖气自动匹配中的 图像
		desc: [
			1280, 720,
			[
				[center, 373, 14, 0x260904],
				[center, 730, 5, 0x2b0e17],
				[center, 760, 98, 0x290a04],
				[center, 411, 97, 0x300c13],
				[center, 751, 43, 0xd6c5a0],
				[center, 771, 61, 0xd7c3a2],
			]
		],
		oper: [
			[center, 1280, 720, -1, -1, -1, -1, 5000] // 匹配中等5秒
		]
	}, {
		// 庭院已打开菜单，无同心队
		desc: [
			1280, 720,
			[
				[center, 353, 644, 0xb561d2],
				[center, 394, 647, 0x7c40b3],
				[center, 372, 647, 0xd7d1ce],
				[center, 368, 622, 0xf2f2f0],
				[center, 376, 602, 0xd66244],
			]
		],
		oper: [
			[center, 1280, 720, 355, 627, 397, 665, 1000],
		]
	}, {
		// 庭院未打开菜单
		desc: '页面是否为庭院_菜单未展开_只支持默认庭院皮肤与默认装饰',
		oper: [
			[right, 1280, 720, 1168, 592, 1230, 690, 1200]
		]
	}, { // 庭院已打开菜单
		desc: '页面是否为庭院_菜单已展开_只支持默认庭院皮肤与默认装饰',
		oper: [
			[left, 1280, 720, 427, 619, 486, 683, 1000]
		]
	}, {
		// 庭院已打开菜单，另外一种图标
		desc: '页面是否为庭院_菜单已展开_另一种图标_御祝图标_只支持默认庭院皮肤与默认装饰',
		oper: [
			[left, 1280, 720, 427, 619, 486, 683, 1000]
		]
	}, { // 组队界面
		desc: [1280, 720,
			[
				[left, 42, 38, 0xf7e5a7],
				[left, 76, 614, 0x94796b],
				[right, 1194, 34, 0xd6c7a5],
				[right, 1071, 628, 0xf7b263]]
		],
		oper: [
			[center, 1280, 720, 993, 605, 1151, 649, 1000], // 创建队伍
			[center, 1280, 720, 404, 417, 432, 439, 1000], // 不公开
			[center, 1280, 720, 534, 491, 742, 531, 1000]// 创建
		]
	}, {
		desc: [1280, 720,
			[
				[center, 840, 143, 0xd7c8ba],
				[center, 623, 620, 0xccbbaa],
				[center, 721, 625, 0xf4b25f],
				[center, 446, 625, 0xf3b25e],
				[center, 722, 156, 0xdbcdc4],
				[center, 1134, 98, 0x482f28]
			]
		],
		oper: [
			[center, 1280, 720, 702, 601, 865, 650, 1000] // 组队界面 自动匹配
		]
	}, { // 创建队伍
		desc: [1280, 720,
			[
				[left, 228, 62, 0xed8ba1],
				[center, 398, 66, 0x624430],
				[center, 402, 584, 0xde6952],
				[center, 877, 590, 0xf7b263]]
		],
		oper: [
			[center, 1280, 720, 754, 499, 778, 521, 1000], // 不公开
			[center, 1280, 720, 818, 567, 932, 612, 1000]// 创建
		]
	}, {
		oper: [
			[center, 1280, 720, 31, 20, 73, 61, 1000]// 返回
		]
	}]
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		let curCnt = 0;
		const maxCount = 3;
		while (thisScript.oper({
			name: '组队_创建',
			operator: [thisOperator[5], thisOperator[7]]
		})) {
			curCnt++;
			thisScript.keepScreen();
			if (curCnt >= maxCount) {
				// 只运行一次的开关
				thisScript.regionClick([thisOperator[8].oper[0]]);
				log('开关状态'+thisScript.shutDownOpen);
				if (thisScript.shutDownOpen) {
					thisScript.shutDown['27'] = true;
					return true;
				} else {
					thisScript.doPush(thisScript, { text: '体力不够创房，已停止。', before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
					thisScript.stop();
					sleep(2000);
					return true;
				}
			}
		}
		if (thisScript.oper({
			id: 27,
			name: '组队_匹配',
			operator: thisOperator.slice(0, -2)
		})) {
			return true;
		}
		return false;
	}
}
