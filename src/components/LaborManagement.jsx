import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Database, Terminal, Play, CheckCircle2, ShieldCheck, Server, RefreshCw } from 'lucide-react'

// Pre-defined SQL queries and their mock results
const sqlQueries = [
  {
    id: 'select_shifts',
    title: 'Fetch Active Shift Roster',
    query: `SELECT e.name, e.role, s.shift_name, s.hours_allotted, s.status 
FROM employees e 
INNER JOIN shifts s ON e.id = s.employee_id 
ORDER BY s.hours_allotted DESC;`,
    data: [
      { name: 'Aditya Hanashi', role: 'System Admin', shift: 'Night Shift (Core)', hours: 45, status: 'Active' },
      { name: 'Rohan Sharma', role: 'AI Operator', shift: 'Morning Shift', hours: 40, status: 'Active' },
      { name: 'Sarah Jenkins', role: 'Support Agent', shift: 'Afternoon Shift', hours: 38, status: 'On Break' },
      { name: 'Vikram Singh', role: 'QA Lead', shift: 'Evening Shift', hours: 35, status: 'Inactive' }
    ]
  },
  {
    id: 'under_utilization',
    title: 'Audit Weekly Overtime & Compliance',
    query: `SELECT name, role, total_weekly_hours, (total_weekly_hours - 40) AS overtime 
FROM employees 
WHERE total_weekly_hours > 40;`,
    data: [
      { name: 'Aditya Hanashi', role: 'System Admin', shift: 'Database Sync', hours: 52, status: 'Overtime +12h' },
      { name: 'Marcus Chen', role: 'Voice Bot Dev', shift: 'API Validation', hours: 44, status: 'Overtime +4h' }
    ]
  },
  {
    id: 'mysql_connection',
    title: 'Show MySQL System Status',
    query: `SHOW VARIABLES LIKE 'version%'; -- MySQL Server Properties`,
    data: [
      { name: 'version', role: '8.0.32', shift: 'MySQL Community Server', hours: 3306, status: 'Online' },
      { name: 'version_compile_os', role: 'Win64', shift: 'Thread pool pool_0', hours: 1, status: 'Active' }
    ]
  }
]

const LaborManagement = () => {
  const [activeQueryIdx, setActiveQueryIdx] = useState(0)
  const [isExecuting, setIsExecuting] = useState(false)
  const [execResult, setExecResult] = useState(sqlQueries[0].data)
  const [sqlCode, setSqlCode] = useState(sqlQueries[0].query)

  const handleQuerySelect = (idx) => {
    setActiveQueryIdx(idx)
    setSqlCode(sqlQueries[idx].query)
    // Run fake loading transition
    setIsExecuting(true)
    setTimeout(() => {
      setExecResult(sqlQueries[idx].data)
      setIsExecuting(false)
    }, 700)
  }

  const runQueryManually = () => {
    setIsExecuting(true)
    setTimeout(() => {
      setIsExecuting(false)
    }, 600)
  }

  return (
    <section className="py-24 relative overflow-hidden bg-black" id="labor">
      {/* Moving Cyber Grid Background */}
      <div className="absolute inset-0 grid-pattern opacity-[0.06] pointer-events-none" />
      <div className="absolute top-[30%] left-[20%] w-96 h-96 rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[450px] h-[450px] rounded-full bg-purple-600/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-900/10 backdrop-blur-md mb-4"
          >
            <Database size={12} className="text-blue-400" />
            <span className="text-[10px] font-semibold text-blue-300 font-orbitron tracking-widest uppercase">
              Relational Control
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-white">
            MySQL Labor <span className="gradient-text font-extrabold">Management</span>
          </h2>
          <div className="title-underline mt-4" />
          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-sm md:text-base leading-relaxed">
            A high-performance workforce pipeline backed by local MySQL database structures. Track schedules, monitor hourly check-ins, and query telemetry in real time.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: MySQL Metrics & Live Connection Info */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Database Status Box */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass rounded-2xl p-6 border border-white/5 relative overflow-hidden"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <Server size={18} className="text-blue-400" />
                  <h3 className="font-orbitron font-bold text-sm tracking-wide text-white">CONNECTION_INFO</h3>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[9px] font-bold text-emerald-400 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  LIVE
                </div>
              </div>

              <div className="space-y-3 font-mono text-[11px] text-gray-400">
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span>DB_ENGINE:</span>
                  <span className="text-white font-bold">MySQL 8.0</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span>PORT:</span>
                  <span className="text-cyan-400">3306</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span>HOST_URL:</span>
                  <span className="text-white">localhost:3306</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span>DB_NAME:</span>
                  <span className="text-purple-400">pluto_labor_db</span>
                </div>
                <div className="flex justify-between">
                  <span>PING_LATENCY:</span>
                  <span className="text-emerald-400 font-bold">4.2 ms</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Query Selector list */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass rounded-2xl p-6 border border-white/5"
            >
              <h3 className="font-orbitron font-bold text-sm tracking-wide text-white border-b border-white/10 pb-4 mb-4">
                PRESET_QUERIES
              </h3>
              <div className="space-y-2">
                {sqlQueries.map((q, idx) => (
                  <button
                    key={q.id}
                    onClick={() => handleQuerySelect(idx)}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 text-xs font-medium cursor-pointer ${
                      activeQueryIdx === idx
                        ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-white font-semibold shadow-[0_0_15px_rgba(59,130,246,0.15)]'
                        : 'bg-white/5 border border-transparent text-gray-400 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {q.title}
                  </button>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Right: Live Query Console & Table Results */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* SQL Terminal Console */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass rounded-2xl border border-white/5 overflow-hidden shadow-2xl"
            >
              {/* Terminal header */}
              <div className="bg-white/5 px-6 py-3 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Terminal size={14} className="text-gray-400" />
                  <span className="font-mono text-xs text-gray-300 uppercase tracking-widest">Interactive Terminal</span>
                </div>
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
              </div>

              {/* Console Code Editor area */}
              <div className="p-6 bg-black/60 font-mono text-xs text-emerald-400/90 space-y-4">
                <textarea
                  value={sqlCode}
                  onChange={(e) => setSqlCode(e.target.value)}
                  className="w-full bg-transparent border-none text-emerald-400 focus:outline-none focus:ring-0 font-mono text-sm leading-relaxed h-20 resize-none"
                  style={{ outline: 'none' }}
                />
                
                {/* Submit query block */}
                <div className="flex items-center justify-between border-t border-white/5 pt-4">
                  <span className="text-[10px] text-gray-500 tracking-wider">
                    Query completed in {isExecuting ? '...' : '0.003s'}
                  </span>
                  
                  <button
                    onClick={runQueryManually}
                    disabled={isExecuting}
                    className="btn-primary inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white shadow-[0_0_15px_rgba(59,130,246,0.25)] cursor-pointer hover:scale-[1.02] transition-transform"
                  >
                    {isExecuting ? (
                      <RefreshCw size={12} className="animate-spin text-white" />
                    ) : (
                      <Play size={12} fill="white" className="text-white" />
                    )}
                    <span>Run Query</span>
                  </button>
                </div>
              </div>
            </motion.div>

            {/* MySQL Query Outputs Table */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass rounded-2xl border border-white/5 overflow-hidden shadow-2xl p-6"
            >
              <h3 className="font-orbitron font-bold text-xs tracking-wider text-gray-400 uppercase mb-4">
                Result Set ({execResult.length} rows)
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-medium text-gray-300">
                  <thead className="bg-white/5 text-[10px] text-gray-500 font-mono uppercase tracking-widest">
                    <tr>
                      <th className="px-4 py-3 border-b border-white/5">Employee Name</th>
                      <th className="px-4 py-3 border-b border-white/5">DB Role</th>
                      <th className="px-4 py-3 border-b border-white/5">Current Shift / Task</th>
                      <th className="px-4 py-3 border-b border-white/5 text-center">Tally / Capacity</th>
                      <th className="px-4 py-3 border-b border-white/5 text-right">System status</th>
                    </tr>
                  </thead>
                  
                  {/* Results listing */}
                  <tbody className="divide-y divide-white/5 font-medium relative">
                    <AnimatePresence mode="wait">
                      {isExecuting ? (
                        <tr className="bg-transparent">
                          <td colSpan={5} className="py-12 text-center text-gray-500 font-mono text-xs">
                            <span className="inline-flex gap-2 items-center justify-center">
                              <RefreshCw size={14} className="animate-spin text-blue-400" />
                              Executing MySQL pipeline queries...
                            </span>
                          </td>
                        </tr>
                      ) : (
                        execResult.map((row, i) => (
                          <motion.tr
                            key={`${activeQueryIdx}-${i}`}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            transition={{ duration: 0.25, delay: i * 0.05 }}
                            className="hover:bg-white/5 transition-colors"
                          >
                            <td className="px-4 py-3.5 font-bold text-white font-orbitron tracking-wide">{row.name}</td>
                            <td className="px-4 py-3.5 text-gray-400 font-mono">{row.role}</td>
                            <td className="px-4 py-3.5 text-gray-300 font-mono">{row.shift}</td>
                            <td className="px-4 py-3.5 text-center font-bold text-white font-mono">{row.hours} hrs</td>
                            <td className="px-4 py-3.5 text-right">
                              <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider font-mono ${
                                row.status.toLowerCase().includes('active') || row.status.toLowerCase().includes('online')
                                  ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400'
                                  : row.status.toLowerCase().includes('break')
                                    ? 'bg-yellow-500/10 border border-yellow-500/20 text-yellow-400'
                                    : row.status.toLowerCase().includes('overtime')
                                      ? 'bg-purple-500/10 border border-purple-500/20 text-purple-400 animate-pulse'
                                      : 'bg-red-500/10 border border-red-500/20 text-red-400'
                              }`}>
                                <span className={`w-1 h-1 rounded-full ${
                                  row.status.toLowerCase().includes('active') || row.status.toLowerCase().includes('online')
                                    ? 'bg-emerald-400'
                                    : row.status.toLowerCase().includes('break')
                                      ? 'bg-yellow-400'
                                      : 'bg-purple-400'
                                }`} />
                                {row.status}
                              </span>
                            </td>
                          </motion.tr>
                        ))
                      )}
                    </AnimatePresence>
                  </tbody>
                </table>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default LaborManagement
