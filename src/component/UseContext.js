import { useContext } from 'react'
import { ThemeContext } from '../component/ThemContext';

/**
 * create context
 * provider
 * consumer
 */


export default function UseContext() {
    const context = useContext(ThemeContext)
    return (
        <div>
            {console.log(context.theme)}
            <p className = {context.theme}>- Hạn cuối nộp học phí ngày 15/11/2021. Nhà trường đã gửi thông báo học phí về các lớp, gửi thông báo trên tài khoản cá nhân sinh viên và gọi điện trực tiếp thông báo đến phụ huynh và sinh viên. Vì vậy sau ngày 15/11/2021 sinh viên không hoàn thành học phí sẽ không đủ điều kiện thi hết học phần theo quy định của trường.</p>
        </div>
    )
}
