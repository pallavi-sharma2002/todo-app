

import { useState } from "react";

export default function MyTasks({myAllTask, getAllTask}) {
  const [showModal, setShowModal] = useState(false);
  const [modalTask, setModalTask] = useState(null);

  const completeTask = async(id)=>{
    const res = await fetch(`http://localhost:5000/api/task/completetask/${id}`,{
      method:"put"
    });
    const data = await res.json();
    console.log(data);
    getAllTask();
  }


  const deleteTask = async(id)=>{
    const res = await fetch (`http://localhost:5000/api/task/deletetask/${id}`,{
      method:"delete"
    });
    const data = await res.json()
          getAllTask();
    

}


  // const updateTask = async (id, updatedTitle, updatedDescription) => {
  //   const res = await fetch(`http://localhost:5000/api/task/updatetask/${id}`, {
  //     method: "put", // As discussed, use PUT for updating
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({
  //       title: updatedTitle,
  //       description: updatedDescription
  //     })
  //   });
    
  //   const data = await res.json();
  //   console.log(data);
  //   getAllTask(); // Refresh the tasks after updating
  // }
  return (
    <div className="bg-black flex justify-center items-center p-6 py-16">
      <div className="w-full max-w-6xl bg-[#0f0f11] border border-white/10 rounded-3xl p-10 shadow-2xl relative overflow-hidden">

        {/* Subtle background glow */}
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <h1 className="text-white text-4xl font-bold mb-10 flex items-center gap-3 relative z-10">
          <span className="w-2 h-8 bg-purple-500 rounded-full"></span>
          My Tasks
        </h1>

        <div className="flex flex-wrap gap-8 relative z-10">
          {/* Card 1 */}
          {myAllTask && myAllTask.map((task, index) => (

            <div key={index} className="group w-72 h-80 bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-500 hover:border-purple-500/50 hover:bg-black/60 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(168,85,247,0.15)] flex flex-col cursor-pointer relative">
              <div className="absolute top-6 right-6 flex gap-3">
                <button className="text-gray-500 hover:text-green-400 transition-colors" title="Complete" onClick={()=>completeTask(task._id)}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </button>
                <button className="text-gray-500 hover:text-blue-400 transition-colors" title="Edit" onClick={() => { setModalTask(task); setShowModal(true); }}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                </button>
                <button className="text-gray-500 hover:text-red-400 transition-colors" title="Delete" onClick={()=>deleteTask(task._id)}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                </button>
              </div>
              <div className="w-12 h-12 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>
              </div>
              <h3 className="text-white text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors"> {task.title}</h3>
              <p className="text-gray-400 text-sm flex-grow leading-relaxed">{task.description}</p>
              <div className="mt-4 pt-5 border-t border-white/10 flex justify-between items-center">
               { task.isCompleted === false &&  <span className="text-xs font-bold px-3 py-1.5 bg-red-500/20 text-red-500 rounded-full border border-yellow-500/20"> Status: Incomplete </span>}
               { task.isCompleted === true &&  <span className="text-xs font-bold px-3 py-1.5 bg-green-600/20 text-green-600 rounded-full border border-yellow-500/20">Status: Completed </span>}
                <span className="text-gray-500 text-xs font-medium">{new Date(task.createdAt).toLocaleDateString("en-US", { year: 'numeric', month: 'short', day: 'numeric' })}</span>
              </div>
            </div>
          ))}

        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-6">
          <div className="w-full max-w-2xl rounded-3xl bg-[#0f0f11] border border-white/10 p-8 shadow-2xl relative">
            <button
              type="button"
              onClick={() => { setShowModal(false); setModalTask(null); }}
              className="absolute right-4 top-4 text-gray-400 hover:text-white"
              aria-label="Close modal"
            >
              ✕
            </button>
            <h2 className="text-white text-3xl font-bold mb-4">Edit Task</h2>
            <p className="text-gray-400 mb-6">This modal opens when you click the Edit button. No update functionality is enabled yet.</p>
            <div className="grid gap-5">
              <label className="flex flex-col text-sm text-gray-300">
                Title
                <input
                  type="text"
                  value={modalTask?.title || ""}
                  readOnly
                  className="mt-2 rounded-2xl border border-white/10 bg-black/70 px-4 py-3 text-white outline-none"
                />
              </label>
              <label className="flex flex-col text-sm text-gray-300">
                Description
                <textarea
                  value={modalTask?.description || ""}
                  readOnly
                  className="mt-2 min-h-[120px] resize-none rounded-2xl border border-white/10 bg-black/70 px-4 py-3 text-white outline-none"
                />
              </label>
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => { setShowModal(false); setModalTask(null); }}
                className="rounded-2xl border border-white/10 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

