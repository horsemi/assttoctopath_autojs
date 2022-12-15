export type globalRootType = {
    currentNotifyDate: null | Date,
    app_is_open: boolean,
    checked_yard_count: number,
    currentRunTimes: Record<string, number>,
    running: boolean,
    define_run_time: number,
    define_pause_time: number,
    runningTime: number,
    pauseTime: number,
    notifyTime: number,
    tp_swipe_times: number,
    tsAttackSwhipeNum: number,
    dgCurNum: number,
    currentChatEnd: number,
    greenPosition: number[] | null,
    greenTagEnd: number,
    greenNonDTime: number,
    d6LoadBuff: boolean | null,
    d6LoadedBuff: boolean | null
    d6d: Record<string, number[]>,
    d6RefreshCnt: number,
    d6dCurrentBegin: number,
    d6dBegin: number,
    times: number,
    d6NxFilter: string[],
    d6NextStation: string,
    d6NxRefreshCnt: number,
    d6NextEvent: string[],
    jy_list_swipe_times: number,
    jy_list_getTime_fault_count: number,
    jy_friends_enchantment_waitingtime: number,
    jy_enchantment_index: number,
    back_courtyard_to_next_scheme: string,
}

export const globalRoot: globalRootType = {
    currentNotifyDate: null,
    app_is_open: false,
    checked_yard_count: 0,
    currentRunTimes: {},
    running: undefined,
    define_run_time: 0,
    define_pause_time: 0,
    runningTime: 0,
    pauseTime: 0,
    notifyTime: 0,
    tp_swipe_times: 0,
    tsAttackSwhipeNum: undefined,
    dgCurNum: 0,
    currentChatEnd: undefined,
    greenPosition: null,
    greenTagEnd: undefined,
    greenNonDTime: 0,
    d6LoadBuff: undefined,
    d6LoadedBuff: undefined,
    d6d: undefined,
    d6RefreshCnt: undefined,
    d6dCurrentBegin: undefined,
    d6dBegin: undefined,
    times: 0,
    d6NxFilter: undefined,
    d6NextStation: undefined,
    d6NxRefreshCnt: undefined,
    d6NextEvent: undefined,
    jy_list_swipe_times: 0,
    jy_list_getTime_fault_count: 0,
    jy_friends_enchantment_waitingtime: undefined,
    jy_enchantment_index: 0,
    back_courtyard_to_next_scheme: '',
}