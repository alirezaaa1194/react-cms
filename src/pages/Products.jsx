import React, { useEffect, useState } from "react";
import { createProduct, deleteProduct, getAllProducts } from "../utils";
import { useNavigate } from "react-router-dom";
import { PlusIcon } from "../components/icons/icons";
import { VerticalDotsIcon } from "../components/icons/icons";
import { SearchIcon } from "../components/icons/icons";
import { ChevronDownIcon } from "../components/icons/icons";

import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Input, Button, DropdownTrigger, Dropdown, DropdownMenu, DropdownItem, Chip, Pagination, Spinner, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Select, SelectItem } from "@nextui-org/react";
import { toast, ToastContainer } from "react-toastify";
const statusColorMap = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

const INITIAL_VISIBLE_COLUMNS = ["id", "name", "price", "status", "actions"];

const columns = [
  { name: "ID", uid: "id", sortable: true },
  { name: "NAME", uid: "name", sortable: true },
  { name: "PRICE", uid: "price", sortable: true },
  { name: "STATUS", uid: "status", sortable: true },
  { name: "ACTIONS", uid: "actions" },
];

const statusOptions = [
  { name: "Active", uid: "active" },
  { name: "Paused", uid: "paused" },
  { name: "Vacation", uid: "vacation" },
];
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function Products() {
  let navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(true);
  const getProductsHandler = () => {
    getAllProducts().then((products) => {
      setProducts(() => products);
      setIsLoading(false);
    });
  };

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductsHandler();
  }, []);

  const deleteProductsHandler = (id) => {
    let datas = deleteProduct(id).then((res) => {
      setProducts((prevProducts) => prevProducts.filter((product) => product.id != id));
      if (res.status === 500) {
        return "product deleted successfully";
      }
    });

    toast.promise(datas, {
      pending: {
        render() {
          return "I'm loading";
        },
        icon: true,
      },
      success: {
        render({ data }) {
          return `${data}`;
        },
        icon: "🟢",
      },
      error: {
        render({ data }) {
          // When the promise reject, data will contains the error
          return <p>{data.message}</p>;
        },
      },
    });
  };

  // new product form modal
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [backdrop, setBackdrop] = React.useState("opaque");

  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [status, setStatus] = useState(["active", "paused", "vacation"]);
  const [isStock, setIsStock] = useState(["yes", "no"]);

  const registerProductHandler = async () => {
    if (productName && productPrice && Array.from(status).join(", ")) {
      let datas = createProduct(productName, productPrice, Array.from(isStock).join(", "), Array.from(status).join(", ")).then((res) => {
        if (res.status === 500) {
          getProductsHandler();
          setProductName("");
          setProductPrice("");
          setIsStock("");
          onClose();

          return "product added successfully";
        }
      });
      toast.promise(datas, {
        pending: {
          render() {
            return "I'm loading";
          },
          icon: true,
        },
        success: {
          render({ data }) {
            return `${data}`;
          },
          icon: "🟢",
        },
        error: {
          render({ data }) {
            // When the promise reject, data will contains the error
            return <p>{data.message}</p>;
          },
        },
      });
    } else {
      const resolveWithSomeData = new Promise((resolve, reject) => reject("please fill fields"), 3000);
      toast.promise(resolveWithSomeData, {
        error: {
          render({ data }) {
            return <p>{data}</p>;
          },
        },
      });
    }
  };
  const formModal = (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Register Product</ModalHeader>
              <ModalBody>
                <Input autoFocus label="Name" value={productName} onChange={(e) => setProductName(e.target.value)} placeholder="Enter Product Name" variant="bordered" />
                <Input label="Price" placeholder="Enter Product Price" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} type="text" variant="bordered" />

                <Select label="Select an Product Status" selectedKeys={status} onSelectionChange={setStatus}>
                  <SelectItem key="active">active</SelectItem>
                  <SelectItem key="paused">paused</SelectItem>
                  <SelectItem key="vacation">vacation</SelectItem>
                </Select>

                <Select label="Select an isStock Status" selectedKeys={isStock} onSelectionChange={setIsStock}>
                  <SelectItem key="yes">yes</SelectItem>
                  <SelectItem key="no">no</SelectItem>
                </Select>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={registerProductHandler}>
                  Create
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );

  // tabel configs
  const [filterValue, setFilterValue] = React.useState("");
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));
  const [visibleColumns, setVisibleColumns] = React.useState(new Set(INITIAL_VISIBLE_COLUMNS));
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [sortDescriptor, setSortDescriptor] = React.useState({
    column: "age",
    direction: "ascending",
  });
  const [page, setPage] = React.useState(1);

  const pages = Math.ceil(products.length / rowsPerPage);

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === "all") return columns;

    return columns.filter((column) => Array.from(visibleColumns).includes(column.uid));
  }, [visibleColumns]);

  const filteredItems = React.useMemo(() => {
    let filteredproducts = [...products];

    if (hasSearchFilter) {
      filteredproducts = filteredproducts.filter((user) => user.name.toLowerCase().includes(filterValue.toLowerCase()));
    }
    if (statusFilter !== "all" && Array.from(statusFilter).length !== statusOptions.length) {
      filteredproducts = filteredproducts.filter((user) => Array.from(statusFilter).includes(user.status));
    }

    return filteredproducts;
  }, [products, filterValue, statusFilter]);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a, b) => {
      const first = a[sortDescriptor.column];
      const second = b[sortDescriptor.column];
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = React.useCallback((user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "statu":
        return (
          <Chip className="capitalize border-none gap-1 text-default-600" avatarProps={{ radius: "full", size: "sm", src: user.profile }} size="sm" variant="dot">
            {cellValue}
          </Chip>
        );
      case "status":
        return (
          <Chip className="capitalize border-none gap-1 text-default-600" color={statusColorMap[user.status]} size="sm" variant="dot">
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex justify-end items-center gap-2">
            <Dropdown className="bg-background border-1 border-default-200">
              <DropdownTrigger>
                <Button isIconOnly radius="full" size="sm" variant="light">
                  <VerticalDotsIcon className="text-default-400" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem onClick={() => navigate(`/react-cms/product/${user.id}`)}>Edit</DropdownItem>
                <DropdownItem onClick={() => deleteProductsHandler(user.id)}>Delete</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const onRowsPerPageChange = React.useCallback((e) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);

  const onSearchChange = React.useCallback((value) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            classNames={{
              base: "w-full sm:max-w-[44%]",
              inputWrapper: "border-1",
            }}
            placeholder="Search by name..."
            size="sm"
            startContent={<SearchIcon className="text-default-300" />}
            value={filterValue}
            variant="bordered"
            onClear={() => setFilterValue("")}
            onValueChange={onSearchChange}
          />
          <div className="flex gap-3">
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button endContent={<ChevronDownIcon className="text-small" />} size="sm" variant="flat">
                  Status
                </Button>
              </DropdownTrigger>
              <DropdownMenu disallowEmptySelection aria-label="Table Columns" closeOnSelect={false} selectedKeys={statusFilter} selectionMode="multiple" onSelectionChange={setStatusFilter}>
                {statusOptions.map((status) => (
                  <DropdownItem key={status.uid} className="capitalize">
                    {capitalize(status.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button endContent={<ChevronDownIcon className="text-small" />} size="sm" variant="flat">
                  Columns
                </Button>
              </DropdownTrigger>
              <DropdownMenu disallowEmptySelection aria-label="Table Columns" closeOnSelect={false} selectedKeys={visibleColumns} selectionMode="multiple" onSelectionChange={setVisibleColumns}>
                {columns.map((column) => (
                  <DropdownItem key={column.uid} className="capitalize">
                    {capitalize(column.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <Button color="primary" onPress={onOpen} size="sm" endContent={<PlusIcon />}>
                Add New Product
              </Button>
            </Dropdown>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">Total {products.length} products</span>
          <label className="flex items-center text-default-400 text-small">
            Rows per page:
            <select className="bg-transparent outline-none text-default-400 text-small" onChange={onRowsPerPageChange}>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [filterValue, statusFilter, visibleColumns, onSearchChange, onRowsPerPageChange, products.length, hasSearchFilter]);

  const bottomContent = React.useMemo(() => {
    return (
      <div className="py-2 px-2 flex flex-col justify-between items-center">
        <Pagination
          showControls
          classNames={{
            cursor: "bg-primary text-background",
          }}
          color="success"
          isDisabled={hasSearchFilter}
          page={page}
          total={pages}
          variant="light"
          onChange={setPage}
        />
        <span className="text-small self-end text-default-400">{selectedKeys === "all" ? "All items selected" : `${selectedKeys.size} of ${items.length} selected`}</span>
      </div>
    );
  }, [selectedKeys, items.length, page, pages, hasSearchFilter]);

  const classNames = React.useMemo(
    () => ({
      wrapper: ["max-h-[382px]", "max-w-3xl"],
      th: ["bg-transparent", "text-default-500", "border-b", "border-divider"],
      td: [
        // changing the rows border radius
        // first
        "group-data-[first=true]:first:before:rounded-none",
        "group-data-[first=true]:last:before:rounded-none",
        // middle
        "group-data-[middle=true]:before:rounded-none",
        // last
        "group-data-[last=true]:first:before:rounded-none",
        "group-data-[last=true]:last:before:rounded-none",
      ],
    }),
    []
  );

  return (
    <>
      {formModal}
      <ToastContainer />
      <Table
        isCompact
        removeWrapper
        aria-label="Example table with custom cells, pagination and sorting"
        bottomContent={bottomContent}
        bottomContentPlacement="outside"
        checkboxesProps={{
          classNames: {
            wrapper: "after:bg-primary after:text-background text-background",
          },
        }}
        classNames={classNames}
        selectedKeys={selectedKeys}
        selectionMode="multiple"
        sortDescriptor={sortDescriptor}
        topContent={topContent}
        topContentPlacement="outside"
        onSelectionChange={setSelectedKeys}
        onSortChange={setSortDescriptor}
      >
        <TableHeader columns={headerColumns}>
          {(column) => (
            <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"} allowsSorting={column.sortable}>
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody emptyContent={"No products found"} isLoading={isLoading} loadingContent={<Spinner />} items={sortedItems}>
          {(item) => <TableRow key={item.id}>{(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}</TableRow>}
        </TableBody>
      </Table>
    </>
  );
}
