import React from 'react';
import { Button } from 'antd';
import './index.less';

export default () => {
  return (
    <div className="btn_box">
      <div className="txt">按钮</div>
      <Button type="dashed">我是按钮</Button>
    </div>
  );
};
