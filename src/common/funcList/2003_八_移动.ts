import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';

// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func2003 implements IFuncOrigin {
	id = 2003;
	name = '移动';
	desc = '';
	config = [{
		desc: '配置',
		config: []
	}];
	operator: IFuncOperatorOrigin[] = [{ // 00 检测到菜单
		desc: [
			1280, 720,
			[
				[left, 241, 591, 0xeeeeee],
				[left, 64, 574, 0xf5f5f6],
				[right, 1079, 136, 0xe2d57e],
				[right, 1167, 499, 0xf5f5f5],
			]
		],
		oper: [
			[right, 1280, 720, 1055, 115, 1099, 155, 1000],		//	点开小地图
		]
	},
	{	//	01	检测为已展开地图
		desc: [
			1280, 720,
			[
				[right, 1195, 30, 0x0b0b0b],
				[right, 1267, 10, 0x2a2a2a],
				[right, 1235, 20, 0xe9e9e9],
				[left, 64, 642, 0xffffff],
				[center, 476, 687, 0xffffff],
				[right, 1235, 40, 0x020202],
			]
		],
		oper: [
			[center, 1280, 720, 327, 183, 397, 246, 1000],		//	点开小地图左上角
			[center, 1280, 720, 747, 486, 819, 534, 1000],		//	点开小地图右下角
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisconf = thisScript.scheme.config['2003'];

		if (thisScript.oper({
			id: 2003,
			name: '检测是否为小地图',
			operator: [
				{
					desc: thisOperator[1].desc,
				},
			],
		})) {
			thisScript.global.banquet_change_flag = !thisScript.global.banquet_change_flag;
			return thisScript.oper({
				id: 2003,
				name: '移动',
				operator: [
					{
						oper: [thisOperator[1].oper[thisScript.global.banquet_change_flag ? 0 : 1]],
					},
				],
			})
		}

		// 做延时检测 防止登陆后的弹窗
		let curCnt = 0;
		const maxCount = 5;
		while (thisScript.oper({
			id: 2003,
			name: '检测到菜单',
			operator: [
				{
					desc: thisOperator[0].desc
				}
			]
		})) {
			curCnt++;
			thisScript.keepScreen();
			if (curCnt >= maxCount) {
				return thisScript.oper({
					id: 2003,
					name: '点击小地图',
					operator: [
						{
							oper: thisOperator[0].oper
						}
					]
				})
			}
			sleep(500);
		}

		return false;
	}
}

export default new Func2003();
