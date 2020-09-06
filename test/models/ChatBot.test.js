import ChatBot from '../../models/ChatBot'

const chatBot = new ChatBot();

test("getFirstScript test", async () => {
    const result = await chatBot.getFirstScript(1);
    expect(JSON.stringify(result)).toBe(JSON.stringify(
        {
            "id": 1, 
            "chatbot_skill_id" : 1, 
            "contents": "내꺼인 듯 내꺼 아닌 내꺼 같은 그 분\n과연 사귀게 될 건지\n사귀면 언제 사귈 건지\n::emo::{{ramama-heartsmile}}\n타로로 점 쳐볼까?",
            "depth":0
        }
    ));
});

test("getReplyScripts test", async () => {
    const result = await chatBot.getReplyScripts(1);
    expect(JSON.stringify(result)).toBe(JSON.stringify(
        [
            {
                "id": 1, 
                "type_code" : "choc", 
                "contents" : "응 볼래",
                "prev_chatbot_script_id" : 1,
                "next_chatbot_script_id" : 2 
            },
            {
                "id": 2, 
                "type_code" : "choc", 
                "contents" : "아니 나중에",
                "prev_chatbot_script_id" : 1,
                "next_chatbot_script_id" : 6 
            }
        ]
    ));
});

