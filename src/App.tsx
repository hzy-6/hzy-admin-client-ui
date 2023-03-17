import { defineComponent, computed } from "vue";
import { ConfigProvider, Spin } from "ant-design-vue";
import AppStore from "@/core/store/AppStore";
import zhCN from "ant-design-vue/es/locale/zh_CN";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import ThemeStore from "@/core/store/layouts/ThemeStore";

export default defineComponent({
    setup(props, ctx) {
        dayjs.locale("zh-cn");
        const appStore = AppStore();
        const loading = computed(() => appStore.state.loading);

        const themeStore = ThemeStore();

        return () => (
            <ConfigProvider
                locale={zhCN}
                theme={{
                    token: {
                        colorPrimary: '#2f54eb',
                        // colorBgLayout: "red",
                        // paddingXXS: 16,
                        // paddingXS: 16,
                        // paddingSM: 16,
                        // padding: 16,
                        // paddingMD: 16,
                        // paddingLG: 16,
                        // paddingXL: 16,
                    },
                    algorithm: themeStore.themeConfig
                }}>
                <Spin spinning={loading.value} >
                    <router-view></router-view>
                </Spin>
            </ConfigProvider >
        )
    }
}) 