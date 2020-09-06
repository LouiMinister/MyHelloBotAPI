import ChatBot from '../../models/ChatBot'

const chatBot = new ChatBot();

test(" ", async () => {
    const result = await chatBot.getFirstScript(1);
    expect(JSON.stringify(result)).toBe(JSON.stringify(
        {"id": 1, 
        "chatbot_skill_id" : 1, 
        "contents": "내꺼인 듯 내꺼 아닌 내꺼 같은 그 분\n과연 사귀게 될 건지\n사귀면 언제 사귈 건지\n::emo::{{ramama-heartsmile}}\n타로로 점 쳐볼까?"
        , "depth":0}
    ));
});
