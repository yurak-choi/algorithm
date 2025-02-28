// https://school.programmers.co.kr/learn/courses/30/lessons/92334

function solution(id_list, report, k) {
    const reportMap = new Map();
    [...new Set(report)].forEach(r => {
        const [reporting, reported] = r.split(" ");
        
        const reportingSet = reportMap.get(reported) || new Set();
        reportMap.set(reported, reportingSet.add(reporting))
    });
    
    const idCountMap = new Map(id_list.map(id => [id, 0]))
    for(const reporting of reportMap.values()) {
        if (reporting.size >= k) {
            [...reporting].forEach(id => {
                idCountMap.set(id, idCountMap.get(id) + 1)
            })
        }
    }

    return [...idCountMap.values()]
}
