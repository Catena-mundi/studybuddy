import {ChatEngine} from "react-chat-engine";
import ChatFeed from "./chatFeed";

const projectID = "19b7fa1f-78b6-4391-8b4e-7ad364e35791";

export default function Chat() {
    return <ChatEngine
                height="100vh"
                projectID={projectID}
                userName={this.getItem('username')}
                userSecret={this.getItem('password')}
                renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
                onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
            />
}
