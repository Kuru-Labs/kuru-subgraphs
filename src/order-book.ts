import {
  Initialized as InitializedEvent,
  OrderCreated as OrderCreatedEvent,
  OrdersCanceled as OrdersCanceledEvent,
  OrdersUpdated as OrdersUpdatedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Trade as TradeEvent
} from "../generated/OrderBook/OrderBook"
import {
  Initialized,
  OrderCreated,
  OrdersCanceled,
  OrdersUpdated,
  OwnershipTransferred,
  Trade
} from "../generated/schema"

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.version = event.params.version

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOrderCreated(event: OrderCreatedEvent): void {
  let entity = new OrderCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.orderId = event.params.orderId
  entity.owner = event.params.owner
  entity.size = event.params.size
  entity.price = event.params.price
  entity.isBuy = event.params.isBuy

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOrdersCanceled(event: OrdersCanceledEvent): void {
  let entity = new OrdersCanceled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.orderId = event.params.orderId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOrdersUpdated(event: OrdersUpdatedEvent): void {
  let entity = new OrdersUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.orderIds = event.params.orderIds
  entity.updatedSizes = event.params.updatedSizes

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTrade(event: TradeEvent): void {
  let entity = new Trade(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.orderId = event.params.orderId
  entity.updatedSize = event.params.updatedSize
  entity.takerAddress = event.params.takerAddress
  entity.filledSize = event.params.filledSize

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
