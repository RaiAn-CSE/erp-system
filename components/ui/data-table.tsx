"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsUpDown,
  ArrowUpDown,
  Search,
  Filter,
  Download,
} from "lucide-react";
import { Button } from "./button";

export interface Column {
  name: string;
  key: string;
  isSorting?: boolean;
  align?: "left" | "center" | "right";
}

interface DataTableProps {
  columns: Column[];
  data: any[];
  isTab?: boolean;
  tab1Name?: string;
  tab2Name?: string;
  tab1Handler?: () => void;
  tab2Handler?: () => void;
  page?: number;
  pageSize?: number;
  totalItems?: number;
  onPageChange?: (page: number) => void;
  onPageSizeChange?: (pageSize: number) => void;
}

export function DataTable({
  columns,
  data,
  isTab = false,
  tab1Name = "Tab 1",
  tab2Name = "Tab 2",
  tab1Handler,
  tab2Handler,
  page = 1,
  pageSize = 10,
  totalItems = 0,
  onPageChange,
}: DataTableProps) {
  const [activeTab, setActiveTab] = useState<"tab1" | "tab2">("tab1");
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const handleSort = (columnKey: string) => {
    if (sortColumn === columnKey) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(columnKey);
      setSortDirection("asc");
    }
  };

  const sortedData = React.useMemo(() => {
    if (sortColumn) {
      return [...data].sort((a, b) => {
        if (a[sortColumn] < b[sortColumn])
          return sortDirection === "asc" ? -1 : 1;
        if (a[sortColumn] > b[sortColumn])
          return sortDirection === "asc" ? 1 : -1;
        return 0;
      });
    }
    return data;
  }, [data, sortColumn, sortDirection]);

  const totalPages = Math.ceil(totalItems / pageSize);

  return (
    <div>
      <div className="flex items-center justify-between mb-6 pb-4 border-b">
        {isTab && (
          <div className="flex gap-2 bg-gray-100/80 p-1 rounded-lg">
            <button
              className={`px-4 py-2 rounded-lg ${
                activeTab === "tab1"
                  ? "bg-white shadow-sm"
                  : "text-gray-500 hover:text-gray-900"
              }`}
              onClick={() => {
                setActiveTab("tab1");
                tab1Handler?.();
              }}
            >
              {tab1Name}
            </button>
            <button
              className={`px-4 py-2 rounded-lg ${
                activeTab === "tab2"
                  ? "bg-white shadow-sm"
                  : "text-gray-500 hover:text-gray-900"
              }`}
              onClick={() => {
                setActiveTab("tab2");
                tab2Handler?.();
              }}
            >
              {tab2Name}
            </button>
          </div>
        )}
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="search"
              placeholder="Search..."
              className="pl-8 w-[300px]"
            />
          </div>
          <Button variant="outline">
            <Filter className="h-4 w-4" /> Filter
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4" /> Export
          </Button>
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHead
                  key={column.key}
                  className={column.align ? `text-${column.align}` : ""}
                >
                  <div
                    className={`flex items-center ${
                      column.align === "right" ? "justify-end" : ""
                    }`}
                  >
                    {column.name}
                    {column.isSorting && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleSort(column.key)}
                      >
                        {sortColumn === column.key ? (
                          sortDirection === "asc" ? (
                            <ArrowUpDown className="h-4 w-4" />
                          ) : (
                            <ChevronsUpDown className="h-4 w-4" />
                          )
                        ) : (
                          <ChevronsUpDown className="h-4 w-4" />
                        )}
                      </Button>
                    )}
                  </div>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedData.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {columns.map((column) => (
                  <TableCell
                    key={column.key}
                    className={column.align ? `text-${column.align}` : ""}
                  >
                    {row[column.key]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between mt-4">
        <div>
          Showing {(page - 1) * pageSize + 1} to{" "}
          {Math.min(page * pageSize, totalItems)} of {totalItems} entries
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onPageChange?.(page - 1)}
            disabled={page === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onPageChange?.(page + 1)}
            disabled={page === totalPages}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
