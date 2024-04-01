import styled from "styled-components";
import {DatePicker} from "antd";

const RangePickerMobile = styled.div`
  .ant-picker-panel {
    &:last-child {
      width: 0;
      .ant-picker-header {
        position: absolute;
        right: 0;
        .ant-picker-header-prev-btn, .ant-picker-header-view {
          visibility: hidden;
        }
      }

      .ant-picker-body {
        display: none;
      }

      @media (min-width: 768px) {
        width: 280px!important;
        .ant-picker-header {
          position: relative;
          .ant-picker-header-prev-btn, .ant-picker-header-view {
            visibility: initial;
          }
        }

        .ant-picker-body {
          display: block;
        }
      }
    }
  }
`;

export const RangeDatePicker = (props: any) => {
    return (
        <DatePicker.RangePicker
            panelRender={(panelNode) => (
                <RangePickerMobile>{panelNode}</RangePickerMobile>
            )}
            {...props}
        />
    );
}