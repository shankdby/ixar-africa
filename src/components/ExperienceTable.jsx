import React, { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import Style from './Style';
import { EXPERIENCE_RECORD, RECORD_COUNTRIES, RECORD_STATUSES } from '../experienceRecord';

/* The experience record as a working table: searchable, filterable by country
 * and status, and sortable on every column.
 *
 * Columns match the source sheet minus the work order value, which is a bid
 * figure and stays out of a public page. See src/experienceRecord.js.
 *
 * Client was folded into the project name until the review of 8 September
 * 2026, so every row began by repeating a company name and the column could
 * not be sorted or scanned. It is its own column now.
 *
 * Period was a mixture of single years and ranges ("2024-2025"), which made
 * two work orders on the same site look like one long engagement. A single
 * year now: the year of completion, or the current year for work still
 * running.
 */

const COLUMNS = [
  { key: 'no', label: 'No', width: '58px' },
  { key: 'client', label: 'Client', width: '190px' },
  { key: 'project', label: 'Project' },
  { key: 'year', label: 'Year', width: '90px' },
  { key: 'status', label: 'Status', width: '140px' },
  { key: 'location', label: 'Location' },
];

export default function ExperienceTable({ rows = EXPERIENCE_RECORD }) {
  const [query, setQuery] = useState('');
  const [country, setCountry] = useState('');
  const [status, setStatus] = useState('');
  const [sortKey, setSortKey] = useState('no');
  const [sortDir, setSortDir] = useState(1);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return rows
      .filter((r) => (!country || r.country === country))
      .filter((r) => (!status || r.status === status))
      .filter((r) =>
        !q ||
        [r.project, r.client, r.location, r.year, r.status, r.scope].some((v) =>
          String(v).toLowerCase().includes(q)))
      .sort((a, b) => {
        const x = a[sortKey];
        const y = b[sortKey];
        if (typeof x === 'number' && typeof y === 'number') return (x - y) * sortDir;
        return String(x).localeCompare(String(y), undefined, { numeric: true }) * sortDir;
      });
  }, [rows, query, country, status, sortKey, sortDir]);

  const sortBy = (key) => {
    if (key === sortKey) setSortDir((d) => -d);
    else { setSortKey(key); setSortDir(1); }
  };

  return (
    <div className="xr">
      <div className="xr-bar">
        <label className="xr-search">
          <Search size={16} aria-hidden="true" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects, clients, locations…"
            aria-label="Search the experience record"
          />
        </label>

        <select value={country} onChange={(e) => setCountry(e.target.value)} aria-label="Filter by country">
          <option value="">All countries</option>
          {RECORD_COUNTRIES.map((c) => <option key={c}>{c}</option>)}
        </select>

        <select value={status} onChange={(e) => setStatus(e.target.value)} aria-label="Filter by status">
          <option value="">All statuses</option>
          {RECORD_STATUSES.map((s) => <option key={s}>{s}</option>)}
        </select>

        <span className="xr-count">
          {visible.length} of {rows.length} project{rows.length === 1 ? '' : 's'}
        </span>
      </div>

      <div className="xr-scroll">
        <table className="xr-table">
          <thead>
            <tr>
              {COLUMNS.map((c) => (
                <th
                  key={c.key}
                  style={c.width ? { width: c.width } : undefined}
                  aria-sort={sortKey === c.key ? (sortDir === 1 ? 'ascending' : 'descending') : 'none'}
                >
                  <button type="button" onClick={() => sortBy(c.key)}>
                    {c.label}
                    <span className={`xr-ar ${sortKey === c.key ? 'on' : ''}`}>
                      {sortKey === c.key && sortDir === -1 ? '▼' : '▲'}
                    </span>
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {visible.map((r) => (
              <tr key={r.no}>
                <td className="xr-no">{String(r.no).padStart(2, '0')}</td>
                <td className="xr-client">{r.client}</td>
                <td className="xr-project">
                  {r.project}
                  {r.scope && <span className="xr-scope">{r.scope}</span>}
                  {/* Two pairs of rows are the same client, scope, year and
                      site. They are separate work orders on the source sheet,
                      not a duplicated row, and without saying so the table
                      looks like a mistake. The scope field above replaces this
                      marker as soon as IXAR fills it in. */}
                  {!r.scope && r.separateOrder && (
                    <span className="xr-scope xr-scope--pending">Separate work order</span>
                  )}
                </td>
                <td className="xr-year">{r.year}</td>
                <td>
                  <span className={`xr-status xr-status--${r.status.toLowerCase()}`}>{r.status}</span>
                </td>
                <td className="xr-loc">{r.location}</td>
              </tr>
            ))}
            {!visible.length && (
              <tr><td className="xr-empty" colSpan={COLUMNS.length}>No projects match that search.</td></tr>
            )}
          </tbody>
        </table>
      </div>

      <Style>{`
        .xr-bar{display:flex;gap:12px;flex-wrap:wrap;align-items:center;margin-bottom:18px}
        .xr-search{display:flex;align-items:center;gap:10px;flex:1;min-width:240px;
          border:1px solid var(--line);background:#fff;padding:0 14px;color:var(--text-dim)}
        .xr-search input{flex:1;border:0;outline:0;font-family:inherit;font-size:.9375rem;
          padding:13px 0;color:var(--text-body);background:transparent}
        .xr-bar select{font-family:inherit;font-size:.9375rem;border:1px solid var(--line);
          background:#fff;padding:13px 14px;color:var(--text-body)}
        .xr-count{margin-left:auto;font-size:.85rem;font-weight:700;color:var(--text-dim)}

        .xr-scroll{overflow-x:auto;border:1px solid var(--line);background:#fff;box-shadow:var(--shadow-sm)}
        .xr-table{width:100%;border-collapse:collapse;min-width:940px}
        .xr-table th{background:var(--navy);padding:0;text-align:left}
        .xr-table th button{width:100%;display:flex;align-items:center;gap:8px;background:none;border:0;
          cursor:pointer;font-family:inherit;font-size:.6875rem;font-weight:800;letter-spacing:.1em;
          text-transform:uppercase;color:#fff;padding:16px 18px;text-align:left}
        .xr-table th button:hover{background:var(--navy-light)}
        .xr-ar{opacity:.3;font-size:.55rem}
        .xr-ar.on{opacity:1;color:#FF6B69}
        .xr-table td{padding:15px 18px;font-size:.9375rem;border-top:1px solid var(--line);
          vertical-align:top;color:var(--text-body)}
        .xr-table tbody tr:hover{background:#FCFCFD}
        .xr-no{font-weight:800;color:var(--text-dim);font-size:.8125rem}
        .xr-client{font-weight:800;color:var(--text-main)}
        .xr-project{color:var(--text-body)}
        .xr-year{font-variant-numeric:tabular-nums;color:var(--text-body)}
        .xr-scope{display:block;margin-top:5px;font-size:.75rem;font-weight:700;
          letter-spacing:.05em;text-transform:uppercase;color:var(--text-dim)}
        .xr-scope--pending{color:#9AA3AE;font-weight:600;text-transform:none;letter-spacing:0;font-style:italic}
        .xr-loc{color:var(--text-dim)}
        .xr-status{display:inline-block;font-size:.6875rem;font-weight:800;letter-spacing:.06em;
          text-transform:uppercase;padding:5px 10px;white-space:nowrap;
          background:var(--bg-tint);color:var(--text-body)}
        .xr-status--ongoing{background:var(--primary-light);color:var(--brand)}
        .xr-status--extension{background:#FFF4D6;color:#7A5B00}
        .xr-empty{text-align:center;padding:40px;color:var(--text-dim)}
        @media (max-width:760px){ .xr-count{margin-left:0} }
      `}</Style>
    </div>
  );
}
