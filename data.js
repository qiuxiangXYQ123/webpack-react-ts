import { inFormList } from '@/interface/common'

export const column = [
    { align:'center', label: '备案号', prop: 'dataFromCodeName',  },
    { align:'center', label: '姓名', prop: 'matName',  },
    { align:'center', label: '身份证', prop: 'subPropNoInfo_name',  },
    { align:'center', label: '授权人姓名', prop: 'subPropNoInfo_no',  },
    { align:'center', label: '授权人身份证', prop: 'crteTime',  },
    { align:'center', label: '授权关系', prop: 'opterName',  },
    { align:'center', label: '生效日期', prop: 'taskStatsName',  },
    { align:'center', label: '经办人', prop: 'nodeName',  },
    { align:'center', label: '经办时间', prop: 'nodeAuditStasName',  },
    { align:'center', label: '状态', prop: 'nodeAuditStasName',  },
    { align:'center', label: '审批人', prop: 'nodeAuditStasName',  },
    { align:'center', label: '审批时间', prop: 'nodeAuditStasName',  },
]



// 人员搜索
export const formList = [
    {
        prop: 'matId',
        label: '证件类型',
        type: 'select',
        placeholder: '请选择',
        option: []
    },
    {
        prop: 'subPropName',
        label: '医保电子凭证/证件号码',
        type: 'input',
        placeholder: '请输入'
    },
]

// 人员基本信息通用查询
export const formList2 = [
    {
        prop: 'matId',
        label: '证件号码',
        type: 'select',
        placeholder: '请选择',
        option: []
    },
    {
        prop: 'matId',
        label: '证件类型',
        type: 'select',
        placeholder: '请选择',
        option: []
    },
    {
        prop: 'matId',
        label: '人员姓名',
        type: 'input',
        placeholder: '请输入',
    },
    {
        prop: 'matId',
        label: '单位编号',
        type: 'input',
        placeholder: '请输入',
    },
    {
        prop: 'matId',
        label: '性别',
        type: 'select',
        placeholder: '请选择',
        option: []
    },
    {
        prop: 'subPropName',
        label: '户口性质',
        type: 'input',
        placeholder: '请输入'
    },
]

