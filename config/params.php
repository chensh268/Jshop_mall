<?php


return [
    'user' => [
        'sex' => [
            '1' => '男',
            '2' => '女',
            '3' => '待定',
        ],
        'status' => [
            '1' => '正常',
            '2' => '停用',
        ],
        'state' => [
            '1' => '登录',
            '2' => '退出',
            '3' => '注册'
        ]
    ],

    'bill_payments' => [
        'status' => [
            '1' => '待支付',
            '2' => '已支付',
            '3' => '其他'
        ],
        'type' => [
            '1' => '订单',
            '2' => '充值',
        ]
    ],

    'bill_aftersales' => [
        'status' => [
            '1' => '售后中',
            '2' => '售后通过',
            '3' => '售后拒绝'
        ],
        'type' => [
            '1' => '未收到货',
            '2' => '已收到货'
        ]
    ],

    'bill_refund' => [
        'status' => [
            '1' => '未退款',
            '2' => '已退款',
            '3' => '同意退款但原路退还失败',
            '4' => '拒绝'
        ],
        'type' => [
            '1' => '订单',
            '2' => '充值单',
            '5' => '表单订单',
            '6' => '表单支付',
        ]
    ],

    'bill_reship' => [
        'status' => [
            '1' => '待退货',
            '2' => '运输中',
            '3' => '已收退货'
        ]
    ],

    //订单
    'order' => [
        //订单来源
        'source' => [
            '1' => 'PC页面',
            '2' => 'H5页面',
            '3' => '微信小程序',
            '4' => '支付宝小程序',
            '5' => 'APP',
            '6' => '头条系小程序'
        ],
        //支付状态
        'pay_status' => [
            '1' => '未付款',
            '2' => '已付款',
            '3' => '部分付款',
            '4' => '部分退款',
            '5' => '已退款'
        ],
        //发货状态
        'ship_status' => [
            '1' => '未发货',
            '2' => '部分发货',
            '3' => '已发货',
            '4' => '部分退货',
            '5' => '已退货'
        ],
        //订单状态
        'status' => [
            '1' => '正常',
            '2' => '完成',
            '3' => '取消'
        ],
        //收货状态
        'confirm' => [
            '1' => '未确认收货',
            '2' => '已确认收货'
        ],
        'status_text' => [
            '1' => '待付款',
            '2' => '待发货',
            '3' => '待收货',
            '4' => '待评价',
            '5' => '已评价',
            '6' => '已完成',
            '7' => '已取消',
            '8' => '部分发货'
        ],
        //开票类型
        'tax_class' => [
            '1' => '订单'
        ],
        //发票类型
        'tax_type' => [
            '1' => '不开发票',
            '2' => '个人发票',
            '3' => '企业发票'
        ],
        //开票状态
        'tax_status' => [
            '1' => '未开票',
            '2' => '已开票'
        ],
        //用户性别
        'sex' => [
            '1' => '男',
            '2' => '女',
            '3' => '未知'
        ],
        //评价状态
        'is_comment' => [
            '1' => '未评价',
            '2' => '已评价'
        ],
        // 配送物流状态
        'logistics_state' => [
            '0' => '在途中',
            '1' => '已揽收',
            '2' => '疑难',
            '3' => '已签收'
        ],
        //订单类型
        'type' => [
            '1' => '普通订单',
            '2' => '拼团订单',
            '3' => '抽奖订单'
        ],
    ],

    //优惠券
    'coupon' => [
        //优惠券状态
        'status' => [
            '1' => '启用',
            '2' => '禁用'
        ],
        //领取状态
        'is_used' => [
            '1' => '未使用',
            '2' => '已使用'
        ]
    ],

    //支付
    'payments' => [
        'status' => [
            '1' => '启用',
            '2' => '禁用'
        ],
        'is_online' => [
            '1' => '线上支付',
            '2' => '线下支付',
        ]
    ],

    //支付方式
    'payment_type' => [
        'wechatpay' => '微信支付',
        'alipay' => '支付宝支付',
        'offline' => '线下支付',
        'balancepay' => '余额支付'
    ],

    //文章是否发布
    'article' => [
        'is_pub' => [
            '1' => '已发布',
            '2' => '未发布'
        ]
    ],

    //广告类型
    'carousel' => [
        'type' => [
            '1' => 'URL链接',
            '2' => '商品',
            '3' => '文章',
            '4' => '文章分类',
            '5' => '智能表单',
        ],
    ],

    //配送方式重量
    'ship_unit' => [
        '500'   => '500克',
        '1000'  => '1公斤',
        '1200'  => '1.2公斤',
        '2000'  => '2公斤',
        '5000'  => '5公斤',
        '10000' => '10公斤',
        '20000' => '20公斤',
        '50000' => '50公斤',
    ],

    //促销表
    'promotion' => [
        'exclusive' => [
            '1' => '否',
            '2' => '是'
        ],
        'status' => [
            '1' => '开启',
            '2' => '关闭'
        ]
    ],

    //评价
    'comment' => [
        '1' => '好评',
        '0' => '中评',
        '-1' => '差评'
    ],

    'message' => [
        'status' => [
            '1' => '未读',
            '2' => '已读'
        ]

    ],

    'sms' => [
        'status' => [
            '1' => '未使用',
            '2' => '已使用'
        ]

    ],

    'balance' => [
        'type' => [
            '1' => '消费',
            '2' => '退款',
            '3' => '充值',
            '4' => '提现',
            '5' => '佣金',
            '7' =>'平台调整',
            '8' =>'奖励',
        ],
    ],

    'operation' => [
        'type' => [
            'a' => '方法',
            'c' => '控制器',
            'm' => '模块'
        ],
        'perm_type' => [
            '1' => '主体权限',
            '2' => '半主体权限',
            '3' => '附属权限'
        ]
    ],

    'user_point_log' => [
      'type' => [
          '1' => '签到',
          '2' => '消费送积分',
          '3' => '使用积分',
          '4' => '后台',

      ]
    ],

    'manage' => [
        'status' => [
            '1' => '正常',
            '2' => '停用',
        ]
    ],

    'bank_card' => [
        'type' => [
            '1' => '储蓄卡',
            '2' => '信用卡'
        ],
        'bank_logo_url' => 'https://apimg.alipay.com/combo.png?d=cashier&t='
    ],

    'user_tocash' => [
        'type' => [
            '1' => '待审核',
            '2' => '提现成功',
            '3' => '提现失败'
        ]
    ],

    //提货单
    'bill_lading' => [
        'status' => [
            '1' => '未提货',
            '2' => '已提货'
        ]
    ],
    //发货单
    'bill_delivery' => [
        'status' => [
            '1' => '准备发货',
            '2' => '已发货',
            '3' => '已确认',
            '4' => '其它',
        ]
    ],
    //微信消息类型
    'weixin_message'=>[
        'type'=>[
            '1'=>'文本消息',
            '2'=>'图片消息',
            '3'=>'图文消息',
        ],
        'attention'=>[
            '1'=>'是',
            '2'=>'否',
        ],
        'default'=>[
            '1'=>'是',
            '2'=>'否',
        ],
        'enable'=>[
            '1'=>'否',
            '2'=>'是',
        ]

    ],
    'form' => [
        'type'            => [
            '1' => '订单',
            '2' => '付款码',
            '3' => '留言',
            '4' => '反馈',
            '5' => '登记',
            '6' => '调研',
        ],
        'field_type'      => [
            'radio'      => '单选',
            'checbox'    => '复选',
            'text'       => '文本框',
            'textarea'   => '文本域',
            'date'       => '日期',
            'time'       => '时间',
            'goods'      => '商品',
            'money'      => '金额',
            'password'   => '密码',
            'area'       => '省市区',
            'image'      => '图片',
            'coordinate' => '坐标',
        ],
        'validation_type' => [
            'string'  => '字符串',
            'number'  => '数字',
            'integer' => '整数',
            'price'   => '价格',
            'email'   => '邮箱',
            'mobile'   => '手机号',
        ],
        'head_type'       => [
            '1' => '图片',
            '2' => '轮播',
            '3' => '视频',
        ],
        'submit_status'=>[
            '1'=>'已处理',
            '2'=>'未处理',
        ],
        'submit_pay_status'=>[
            '1'=>'已支付',
            '2'=>'未支付',
        ],
    ],
    'pages'=>[
        'layout'=>[
            '1'=>'移动端',
        ],
        'type'=>[
            '1'=>'移动端',
            '2'=>'PC端',
        ],
    ],
    'pintuan_record' => [
        'status' => [
            '1' => '拼团中',
            '2' => '拼团成功',
            '3' => '拼团失败'
        ]
    ]
];
