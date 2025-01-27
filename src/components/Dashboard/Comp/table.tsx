import * as React from "react"
import { cn } from "./TableUtility"

type TableProps = React.HTMLProps<HTMLTableElement> & {
  className?: string;
}

type TableHeaderProps = React.HTMLProps<HTMLTableSectionElement> & {
  className?: string;
}

type TableBodyProps = React.HTMLProps<HTMLTableSectionElement> & {
  className?: string;
}

type TableFooterProps = React.HTMLProps<HTMLTableSectionElement> & {
  className?: string;
}

type TableRowProps = React.HTMLProps<HTMLTableRowElement> & {
  className?: string;
}

type TableHeadProps = React.HTMLProps<HTMLTableCellElement> & {
  className?: string;
}

type TableCellProps = React.HTMLProps<HTMLTableCellElement> & {
  className?: string;
}

const Table = React.forwardRef<HTMLTableElement, TableProps>(({ className, ...props }, ref) => (
    <div className="relative w-full overflow-auto">
      <table
        ref={ref}
        className={cn("w-full caption-bottom text-sm", className || "")}
        {...props} />
    </div>
  ))
  
  const TableHeader = React.forwardRef<HTMLTableSectionElement, TableHeaderProps>(({ className, ...props }, ref) => (
    <thead ref={ref} className={cn("[&_tr]:border-b", className || "")} {...props} />
  ))
  
  const TableBody = React.forwardRef<HTMLTableSectionElement, TableBodyProps>(({ className, ...props }, ref) => (
    <tbody
      ref={ref}
      className={cn("[&_tr:last-child]:border-0", className || "")}
      {...props} />
  ))
  
  const TableFooter = React.forwardRef<HTMLTableSectionElement, TableFooterProps>(({ className, ...props }, ref) => (
    <tfoot
      ref={ref}
      className={cn(
        "border-t bg-slate-100/50 font-medium [&>tr]:last:border-b-0 dark:bg-slate-800/50",
        className || ""
      )}
      {...props} />
  ))
  
  const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(({ className, ...props }, ref) => (
    <tr
      ref={ref}
      className={cn(
        "border-b-[10px] dark:border-[#141414] border-gray-100 transition-colors  data-[state=selected]:bg-slate-100 dark:data-[state=selected]:bg-slate-800",
        className || ""
      )}
      {...props} />
  ))
  
  const TableHead = React.forwardRef<HTMLTableCellElement, TableHeadProps>(({ className, ...props }, ref) => (
    <th
      ref={ref}
      className={cn(
        "h-12 px-4 text-left text-white align-middle font-medium font-bold [&:has([role=checkbox])]:pr-0 dark:text-slate-400",
        className || ""
      )}
      {...props} />
  ))
  
  const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>(({ className, ...props }, ref) => (
    <td
      ref={ref}
      className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className || "")}
      {...props} />
  ))
  
  const TableCaption = React.forwardRef<HTMLTableCaptionElement, TableCellProps>(({ className, ...props }, ref) => (
    <caption
      ref={ref}
      className={cn("mt-4 text-sm text-slate-500 dark:text-slate-400", className || "")}
      {...props} />
  ))
  
TableCaption.displayName = "TableCaption"

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}
