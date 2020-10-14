// hook：函数
// 自定义hook用于封装获取数据的逻辑
// state  setState useEffect都是独立的 不同组件引用自定义HOOK 不产生关联

import {
    useState,
    useEffect,
    useCallback
} from 'react'

const BASE_URL = "https://corona.lmao.ninja/v2"

export default function useFetchData(path, {
    // 参数默认值
    initialData = null,
    // converter 转换函数 用于处理数据 相当VUE的computed
    converter = (data) => data,
    refetchIntelval = null
}) {

    //state是独立的，不会共享给多个组件使用，但是每个组件的state类型并不相同，因此这个需由实参传入
    const [data, setData] = useState(initialData)
    const memoryConverter =useCallback( converter, [] )
  
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${BASE_URL}/${path}`)
            const value = await response.json()
            setData(converter(value))
        }

        fetchData()

        if (refetchIntelval) {
            const intervalID = setInterval(fetchData, refetchIntelval)

            return () => {
                clearInterval(intervalID)
            }
        }
    }, [path,memoryConverter, refetchIntelval])

    // 数据变化 自动返回
    return data
}