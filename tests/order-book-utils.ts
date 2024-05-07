import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  Initialized,
  OrderCreated,
  OrdersCanceled,
  OrdersUpdated,
  OwnershipTransferred,
  Trade
} from "../generated/OrderBook/OrderBook"

export function createInitializedEvent(version: i32): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(version))
    )
  )

  return initializedEvent
}

export function createOrderCreatedEvent(
  orderId: BigInt,
  owner: Address,
  size: BigInt,
  price: i32,
  isBuy: boolean
): OrderCreated {
  let orderCreatedEvent = changetype<OrderCreated>(newMockEvent())

  orderCreatedEvent.parameters = new Array()

  orderCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "orderId",
      ethereum.Value.fromUnsignedBigInt(orderId)
    )
  )
  orderCreatedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  orderCreatedEvent.parameters.push(
    new ethereum.EventParam("size", ethereum.Value.fromUnsignedBigInt(size))
  )
  orderCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "price",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(price))
    )
  )
  orderCreatedEvent.parameters.push(
    new ethereum.EventParam("isBuy", ethereum.Value.fromBoolean(isBuy))
  )

  return orderCreatedEvent
}

export function createOrdersCanceledEvent(
  orderId: Array<BigInt>
): OrdersCanceled {
  let ordersCanceledEvent = changetype<OrdersCanceled>(newMockEvent())

  ordersCanceledEvent.parameters = new Array()

  ordersCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "orderId",
      ethereum.Value.fromUnsignedBigIntArray(orderId)
    )
  )

  return ordersCanceledEvent
}

export function createOrdersUpdatedEvent(
  orderIds: Array<BigInt>,
  updatedSizes: Array<BigInt>
): OrdersUpdated {
  let ordersUpdatedEvent = changetype<OrdersUpdated>(newMockEvent())

  ordersUpdatedEvent.parameters = new Array()

  ordersUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "orderIds",
      ethereum.Value.fromUnsignedBigIntArray(orderIds)
    )
  )
  ordersUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "updatedSizes",
      ethereum.Value.fromUnsignedBigIntArray(updatedSizes)
    )
  )

  return ordersUpdatedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createTradeEvent(
  orderId: BigInt,
  updatedSize: BigInt,
  takerAddress: Address,
  filledSize: BigInt
): Trade {
  let tradeEvent = changetype<Trade>(newMockEvent())

  tradeEvent.parameters = new Array()

  tradeEvent.parameters.push(
    new ethereum.EventParam(
      "orderId",
      ethereum.Value.fromUnsignedBigInt(orderId)
    )
  )
  tradeEvent.parameters.push(
    new ethereum.EventParam(
      "updatedSize",
      ethereum.Value.fromUnsignedBigInt(updatedSize)
    )
  )
  tradeEvent.parameters.push(
    new ethereum.EventParam(
      "takerAddress",
      ethereum.Value.fromAddress(takerAddress)
    )
  )
  tradeEvent.parameters.push(
    new ethereum.EventParam(
      "filledSize",
      ethereum.Value.fromUnsignedBigInt(filledSize)
    )
  )

  return tradeEvent
}
