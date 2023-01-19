import { storeOptionsAsProperties } from "commander";
import { resolveMx } from "dns/promises";
interface story {
    by: string;
    descendants: number;
    id: number;
    score: number;
    time: number;
    title: string;
    type: string;
    url: string;
}

  async function Get_HN_Top() {
    const res = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
    if(!res.ok) {
        throw new Error("Failed to fetch HN data - API down or somethin")
    }
    let stories = await res.json()
    stories = stories.slice(0,6)
    let display_objects:story[] =[]
    for(const i in stories){
        let story_data = await fetch(`https://hacker-news.firebaseio.com/v0/item/${stories[i]}.json`)
        let story_obj = await story_data.json()
        let datetime = new Date(story_obj.time*1000)
        story_obj.time = `${datetime.toLocaleDateString("en-AU")}`      
        display_objects.push(story_obj) 
        //console.log(display_objects)
    }
    return display_objects
  }
  
  async function Get_NPR_World(){
    // NPR no longer gives out keys - I found this one on reddit :)
    var NPR_API_KEY = "MDA0NjI1NjgyMDEyNjM1MDIyNjE5ZDBlMQ010"

  }

export default async function Counter() {
    var messages = await Get_HN_Top()
  return (
    <ul role="list" className="divide-y divide-gray-20">
      {messages.map((message) => (
        <li
          key={message.id}
          className="relative bg-white py-5 px-4 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 hover:bg-gray-50 rounded-md"
        >
          <div className="flex justify-between space-x-3">
            <div className="min-w-0 flex-1">
              <a href={message.url} className="block focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true" />
                <p className="truncate text-xs font-medium text-gray-900">{message.title}</p>
                <div className="grid grid-cols-2">
                <p className="truncate text-sm text-gray-500">{message.by}</p>
                <time className="flex-shrink-0 justify-self-end whitespace-nowrap text-sm text-gray-500">
                {message.time}
                </time>
                </div>
                
              </a>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}